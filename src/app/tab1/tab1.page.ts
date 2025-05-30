import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  name1!: string;
  ras(name) {
    this.name1 = name;
  }
  hideTF: boolean;
  hideRF: boolean;
  selectedRadioItem: any;
  selectedRadioGroup: any;
  radioGroupChange(event) {
    console.log('radioGroupChange', event.detail);
    this.selectedRadioGroup = event.detail;
    if (this.selectedRadioGroup.value == 1) {
      this.hideTF = true;
      this.hideRF = false;
    } else if (this.selectedRadioGroup.value == 2) {
      this.hideTF = false;
      this.hideRF = true;
    } else if (this.selectedRadioGroup.value == 3) {
      this.hideTF = true;
      this.hideRF = true;
    } else {
      this.hideTF = false;
      this.hideRF = false;
    }
    console.log(this.selectedRadioGroup.value);
  }
  constructor() {}
}
