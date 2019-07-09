import { Component, OnInit } from '@angular/core';
import * as  firebase from 'firebase/app';
import { mergeMapTo, mergeMap } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import 'firebase/messaging';
import 'firebase/firestore'
import { MessagingService } from './serv/messaging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testproyect';

  constructor(
      private push:MessagingService
  ) { }


  ngOnInit(){
    this.push.Permission();
    this.push.newMessage().subscribe((mss:any)=>{
      console.log(mss);
      
    })
  }

}
