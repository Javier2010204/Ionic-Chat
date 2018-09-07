import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

var config = {
    apiKey: "AIzaSyALF7fgUdrNmQHy_o5J5v-yI0UYsrEPITc",
    authDomain: "ionic-chat-v1.firebaseapp.com",
    databaseURL: "https://ionic-chat-v1.firebaseio.com",
    projectId: "ionic-chat-v1",
    storageBucket: "",
    messagingSenderId: "257302894333"
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(config);
  }
}

