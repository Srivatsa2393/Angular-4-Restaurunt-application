import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  
  onNavigate(feature) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBK0iWrS9kEeh7sTqc11q_ssS0zvI1gzT4",
      authDomain: "ng-recipe-book-fdbc0.firebaseapp.com"
    });
  }
}
