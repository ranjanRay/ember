
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ColorBoxComponent extends Component {

  @tracked
  colors = [{
    id: '1',
    hexCode: '#ffeeac',
    rgbCode: 'rgb(50, 176, 98)',
    name: 'rajeev"s color'
  }];

  @tracked userColorInput = ''

  @action
  updateColor (event) {
    this.userColorInput = event.target.value;
  }

  @action
  addColor() {
    this.colors = [...this.colors, {
      id: '2',
      hexCode: this.userColorInput,
      rgbCode: 'rgb(50, 176, 98)',
    }];
  }

  @action
  removeColor(colorId) {
    this.colors = [...this.colors.filter(color => color.id !== colorId)]
  }
}