import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ArrangementImageComponent extends Component {
    @tracked isLarge = false;

    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}
