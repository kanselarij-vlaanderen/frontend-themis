import { useLegacyStore } from '@warp-drive/legacy';
import { JSONAPICache } from '@warp-drive/json-api';
import { getOwner } from '@ember/owner';

// Legacy-mode store: keeps the classic Model/adapter/serializer setup and the
// store.query / store.findRecord / API, but sourced from @warp-drive/legacy
// instead of ember-data
const LegacyStore = useLegacyStore({
  linksMode: false,
  legacyRequests: true,
  cache: JSONAPICache,
  handlers: [],
  schemas: [],
});

export default class StoreService extends LegacyStore {
  #pendingRequests = new Set();

  /**
   * FastBoot only waits for the route model hooks before serializing the
   * response, while templates can still trigger data requests during the
   * render (async relationship links, component fetches). Register every
   * request with fastboot.deferRendering so FastBoot waits for it and the
   * fetched data ends up in the server-rendered HTML, instead of the request
   * settling after the app instance is already torn down.
   *
   * FastBoot awaits its deferred promise only once,
   * so a request started while it is waiting ex, a
   * relationship link fetched by the re-render that the first wave of data
   * triggers, would escape a plain `deferRendering(future)` and settle
   * against the torn-down store, crashing the server process. Deferring a
   * drain of the pending set instead makes the first registration cover
   * every later wave.
   */
  request(...args) {
    const future = super.request(...args);
    const fastboot = getOwner(this)?.lookup('service:fastboot');
    if (fastboot?.isFastBoot) {
      const settled = Promise.resolve(future).then(
        () => {},
        () => {},
      );
      this.#pendingRequests.add(settled);
      settled.then(() => this.#pendingRequests.delete(settled));
      fastboot.deferRendering(this.#drainPendingRequests());
    }
    return future;
  }

  async #drainPendingRequests() {
    while (this.#pendingRequests.size > 0) {
      await Promise.all([...this.#pendingRequests]);
      // Give the settled requests' continuations a tick to kick off
      // follow-up requests (and remove themselves) before re-checking.
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
}
