import Model from '@ember-data/model';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { debounce } from '@ember/runloop';

const DEBOUNCE_DELAY = 250;

export default class CatalogModel extends Model {
  @tracked
  counter = 0;

  @action
  incrementCount(by) {
    this.counter += by;
  }

  @tracked
  name = 'none';

  setName(name) {
    this.name = name.substr(0, 4);
  }

  @action
  changeName({ srcElement: { value: name } }) {
    debounce(this, this.setName, name, DEBOUNCE_DELAY);
  }
}
