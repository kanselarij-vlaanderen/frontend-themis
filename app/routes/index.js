import Route from '@ember/routing/route';

const datasetTypeMeeting = 'http://themis.vlaanderen.be/id/concept/dataset-type/9119805f-9ee6-4ef1-9ef7-ad8dccc2bf2d'

const datasetTypesConceptSchemeUri = 'http://themis.vlaanderen.be/id/concept-scheme/e93481b2-342d-468b-8def-2d629232d3a5';

export default class IndexRoute extends Route {

  async model() {
    const concepts = await this.store.query('concept',
      {
        filter: { 'in-scheme': { ':uri:': datasetTypesConceptSchemeUri } },
        include: 'in-scheme'
      }
    );

    const governmentBodies = await this.store.query('government-body',
    {
      filter: {
        ':has:is-timespecialization-of': 'true',
        ':has-no:government-bodies': 'true'
      },
      sort: '-start-date.time',
      page: {
        size: 1
      }
    });

    const datasets = await this.store.query('dataset',
    {
      filter: {
        type: datasetTypeMeeting
      },
      sort: '-release-date',
      page: {
        size: 1
      }
    });

    const dataset = datasets.firstObject;
    let meeting = null;

    if (dataset) {
      const meetings = await this.store.query('meeting',
      {
        filter: {
          ':uri:': dataset.subject
        },
        page: {
          size: 1
        }
      });
      meeting = meetings.firstObject;
    }

    return {
      concepts: concepts,
      currentGovernment: governmentBodies.firstObject,
      mostRecentDataset: {
        dataset: dataset,
        meeting: meeting
      }
    };
  }
}
