import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Hero } from './class/hero';
@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss'],
})
export class HeroEditorComponent implements OnInit {
  skillsForm: FormGroup;
  hero: Hero;
  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      hero: [''],
      skills: new FormArray([new FormControl()]),
    });
  }
  deleteSkill(index) {
    (this.skillsForm.controls['skills'] as FormArray).removeAt(index);
  }
  addSkill() {
    (this.skillsForm.controls['skills'] as FormArray).push(new FormControl());
  }
  // Отримання всіх елементів масиву FormArray
  getControls() {
    return (this.skillsForm.get('skills') as FormArray).controls;
  }
  onSubmit() {
    this.hero = new Hero(
      this.skillsForm.value.hero,
      this.skillsForm.value.skills
    );
    console.log(this.hero);
  }
  ngOnInit() {}
}
