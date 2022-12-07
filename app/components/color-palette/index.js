
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ColorBoxComponent extends Component {

  @tracked
  colors = [];

  @tracked userColorCode = ''
  @tracked userColorName = ''

  @action
  updateColorCode (event) {
    this.userColorCode = event.target.value;
  }

  @action
  updateColorName (event) {
    this.userColorName = event.target.value;
  }

  @action
  addColor() {
    if(!this.userColorCode || this.userColorCode.length < 6) {return;}

    this.colors = [...this.colors, {
      id: parseInt(Math.random() * 10000),
      hexCode: this.userColorCode,
      rgbCode: 'rgb(50, 176, 98)',
      name: this.userColorName || ''
    }];
    this.userColorCode = '';
    this.userColorName = '';
  }

  @action
  removeColor(colorId) {
    this.colors = [...this.colors.filter(color => color.id !== colorId)]
  }
}