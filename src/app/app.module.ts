import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from "ng2-charts";
import { LinechartComponent } from './components/charts/linechart/linechart.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingService } from './serv/messaging.service';

const config = {
  apiKey: "AIzaSyBEBIWjIZbl7Xsyc5MMtXSts70l_0ySGWw",
  authDomain: "push-notification2019.firebaseapp.com",
  databaseURL: "https://push-notification2019.firebaseio.com",
  projectId: "push-notification2019",
  storageBucket: "",
  messagingSenderId: "847093407630",
  appId: "1:847093407630:web:682d995afbff22ad"
};

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    AngularFireModule.initializeApp(config),
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
    
  ],
  providers: [
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
