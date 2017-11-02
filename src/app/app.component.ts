import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  input.ng-invalid{border-left: 5px solid red;},
  input.ng-valid{border-left: 5px solid green;}
  `]
})
export class AppComponent implements OnInit {

  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      name: ['puzan', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalCode: [null,Validators.pattern('^[1-9][0-9]{4}$')]
      })
    });

    // this.userForm = new FormGroup({
    //   name: new FormControl("puzan", [Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     city: new FormControl(),
    //     postalCode: new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))
    //   })
    // });
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }

}
