import {Component, OnInit} from '@angular/core';
import {MessagesService} from "./messages.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'messages', templateUrl: './messages.component.html', styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  showMessage: boolean = false;
  errors$: Observable<string[]>;

  constructor(public messagesService: MessagesService) {

  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$.pipe(
      tap(() => this.showMessage = true)
    );
  }


  onClose() {
    this.showMessage = false;
  }

}
