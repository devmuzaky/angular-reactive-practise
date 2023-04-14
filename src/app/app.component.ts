import {Component, OnInit} from '@angular/core';
import {LoadingService} from "./loading/loading.service";
import {MessagesService} from "./messages/messages.service";
import {AuthStoreService} from "./services/auth-store.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public authStore: AuthStoreService) {

  }

  ngOnInit() {


  }

  logout() {

      this.authStore.logout();

  }

}
