import Model from '@ember-data/model';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CatalogModel extends Model {
  @tracked
  counter = 0;

  @action
  incrementCount(by) {
    this.counter += by;
  }

  @tracked
  name = '';

  @action
  changeName({ srcElement: { value: name } }) {
    this.name = name;
  }
}
