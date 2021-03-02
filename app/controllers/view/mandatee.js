import Controller from '@ember/controller';

export default class ViewMandateeController extends Controller {
  queryParams = ['resource'];

  get governmentfieldsText() {
    return this.governmentfields.join(',');
  }
}
