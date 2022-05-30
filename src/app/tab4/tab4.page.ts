import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  form: FormArray;
  animal: FormControl;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //Форма для трьох списків тварин
this.form = this.fb.array([
  this.fb.group({
    animal: this.fb.control(''),
    name: this.fb.control(''),
    color: this.fb.control('')
  }),
  this.fb.group({
    animal: this.fb.control(''),
    name: this.fb.control(''),
    color: this.fb.control('')
  }),
  this.fb.group({
    animal: this.fb.control(''),
    name: this.fb.control(''),
    color: this.fb.control('')
  })
])
    //Єдиний контрол для всіх списків
  this.animal = this.fb.control('');
  }

}
