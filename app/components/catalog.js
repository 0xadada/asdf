import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CatalogComponent extends Component {
  @action
  increment() {
    const value = this.args.catalog.counter;
    const newValue = this.args.catalog.incrementCount(1);
    console.log('value', newValue);
  }
}
