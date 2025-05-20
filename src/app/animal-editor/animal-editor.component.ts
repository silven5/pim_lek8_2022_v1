import { Component, OnInit } from '@angular/core';

import { ControlLinkerService } from './service/controllinker/control-linker.service';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Inject } from '@angular/core';
import { COLORS } from './colos.srv';
@Component({
  selector: 'app-animal-editor',
  templateUrl: './animal-editor.component.html',
  styleUrls: ['./animal-editor.component.scss'],
})
export class AnimalEditorComponent implements OnInit {
  animals = ['🦊', '🦄', '🐉'];
  animal: FormControl = this.fb.control(this.animals[0]);

  form: FormArray = this.fb.array([
    this.fb.group({
      animal: this.fb.control(''),
      name: this.fb.control('Darkwing Fox'),
      color: this.fb.control(this.colors[0].color),
    }),
    this.fb.group({
      animal: this.fb.control(''),
      name: this.fb.control(`Twist one's tail`),
      color: this.fb.control(this.colors[1].color),
    }),
    this.fb.group({
      animal: this.fb.control(''),
      name: this.fb.control('Magical Fox'),
      color: this.fb.control(this.colors[2].color),
    }),
    this.fb.group({
      animal: this.fb.control(''),
      name: this.fb.control('Magical Los'),
      color: this.fb.control(this.colors[3].color),
    }),
  ]);
  linker: ControlLinkerService = new ControlLinkerService<FormControl>();

  constructor(private fb: FormBuilder, @Inject(COLORS) private colors) {}

  ngOnInit() {
    //Форма для трьох списків тварин

    this.linker.link(this.animal);
    const controls = this.form.controls.map((group) => group.get('animal'));
    controls.forEach((control: FormControl) => this.linker.link(control));
  }
  get animalForm() {
    return this.form as unknown as FormGroup;
  }
  ngOnDestroy() {
    this.linker.dispose();
  }
}
