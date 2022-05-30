import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  //Приклад 1
name = new FormControl('Olena'); 
  constructor() { }
  //Приклад2
  updateName(name: string)
  {
    this.name.setValue(name);
  }
  ngOnInit() {}

}
