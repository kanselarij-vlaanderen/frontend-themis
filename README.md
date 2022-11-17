# frontend-themis

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd frontend-themis`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

#### VO header/footer widget details

Test environment:
```
environment:
  EMBER_VO_HEADER_WIDGET_URL: "https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/0756d3dc-338d-4af8-878d-28e7a31a5a2b"
  EMBER_VO_FOOTER_WIDGET_URL: "https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/9d76951d-10ff-4ae2-b548-20ec2ac582de"
```

Production environment:
```
environment:
  EMBER_VO_HEADER_WIDGET_URL: "https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/2c901692-2b36-41d7-8f07-dac9c3a1617f"
  EMBER_VO_FOOTER_WIDGET_URL: "https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/0fc82613-bdce-434b-946d-7b64f13804de"
```

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
