import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("content") content : any;
  userName : String = "";
  message : string = "";
  messages =[];

  constructor(public navCtrl: NavController) {
    this.getMessages();
  }

  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajes"); 
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }

      this.scrollToBottom();
    })
  }

  sendMessage(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, nombre: this.userName})
    this.message = "";
  }

  scrollToBottom(){
    var contentEnd = document.getElementById("content-end").offsetTop;
    console.log(contentEnd);
    this.content.scrollTo(0, contentEnd, 300);
  }

}
