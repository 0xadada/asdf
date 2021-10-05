import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CatalogComponent extends Component {
  @action
  increment(by) {
    this.args.increment(by);
  }
}
