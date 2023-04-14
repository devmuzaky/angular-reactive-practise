import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {Router} from '@angular/router';
import {AuthStoreService} from "../services/auth-store.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authStore: AuthStoreService,
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
    this.authStore.login(val.email, val.password)
      .subscribe(
        () => {
          this.router.navigateByUrl('/courses')
        },
        () => {
          alert('Login Failed');
        },
        () => {
          console.log('Login Completed');
        }
      );
  }



}
