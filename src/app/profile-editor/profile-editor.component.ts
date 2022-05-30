import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;
 
  constructor( 
  ) {
    //!Приклад3
      this.profileForm = new FormGroup({
    firstName: new FormControl(''),
        lastName: new FormControl(''),
    Login: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
    }
  //!Приклад3
onSubmit() {
 
  console.log(this.profileForm.value);
}
  ngOnInit() {}

}
