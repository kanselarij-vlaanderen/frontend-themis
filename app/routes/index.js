import Route from '@ember/routing/route';

const datasetTypesConceptSchemeUri = 'http://themis.vlaanderen.be/id/concept-scheme/e93481b2-342d-468b-8def-2d629232d3a5';

export default class IndexRoute extends Route {

  async model() {
    const concepts = await this.store.query('concept',
      {
       filter: { 'in-scheme': { ':uri:': datasetTypesConceptSchemeUri }},
        include: [
          'in-scheme'
        ].join(',')
      }
    );

    return { concepts: concepts };
  }
}
