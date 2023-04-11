import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {

    this.form = fb.group({
      email: ['devmuzaky@gmail.com', [Validators.required]],
      password: ['moe_', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;


  }

}
