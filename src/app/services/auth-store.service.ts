import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {BehaviorSubject, Observable} from "rxjs";
import {map, shareReplay, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  private subject = new BehaviorSubject<User>(null);

  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient ) {
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/login', {email, password})
      .pipe(
        tap(
          user => this.subject.next(user)
        ),
        shareReplay(),
        // map(user => {
        //   this.subject.next(user);
        //   return user;
        // })
      );
  }

  logout() {
    this.subject.next(null);
  }
}
