import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';


export const firebaseconfig = {
  apiKey: "AIzaSyBYhY8-t3YQpxvH-1zVbhcSynAWKB7YDG4",
  authDomain: "authfull-80cd1.firebaseapp.com",
  databaseURL: "https://authfull-80cd1.firebaseio.com",
  projectId: "authfull-80cd1",
  storageBucket: "authfull-80cd1.appspot.com",
  messagingSenderId: "354307653152"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
