import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { AngularFireDatabase } from "@angular/fire/database";
import * as firebase from "firebase/app";
import 'firebase/messaging';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(
    private db: AngularFireDatabase
  ) { 
   
  }

  messaging = firebase.messaging();
  currentMessaging = new BehaviorSubject(null);

  Permission() {
    this.messaging.requestPermission()
      .then(() => {
        return this.messaging.getToken()
      }).
      then(token => {
        console.log(token);
      })
      .catch(err => {
        console.log(err);

      })
  }

  newMessage(){
    return Observable.create(observer=>{
      this.messaging.onMessage((message:any)=>{
        observer.next(message)
      })
    })
  }
}
