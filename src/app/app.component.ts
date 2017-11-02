import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userForm

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        postalCode: new FormControl()
      })
    });
  }



  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }

}
