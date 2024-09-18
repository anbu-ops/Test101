import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  myForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.minLength(4), Validators.email]],
      password:['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  onSubmit(){
    console.log(this.myForm);
  }

}
