import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor() { }

  login(email: string, password: string): Observable<User> {

  }

  logout() {

  }
}
