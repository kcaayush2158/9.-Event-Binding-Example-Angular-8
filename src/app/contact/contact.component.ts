import { Component, OnInit, Input } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
   //no 1 -prints the welcome to java script in the console
   //template:'<button (click)="onClick()">Greet</button> ',

   //no 2 : Interpolation  and bind to the greating property shows the welcome to java world 
  // template:'<button (click)="onClick()">Greet</button> {{greeting}}',

  //3 printing the event when the mouse is click in the console
  // template:'<button (click)="onClick($event)">Greet</button> ',
  
  //4.Printing the event in the interpolation aand the console
  template:'<button (click)="onClick($event)">Greet</button>{{greeting}} ',
  styles: []
})


export class ContactComponent implements OnInit {
  public greeting = "";

  constructor() { }
  ngOnInit() {
  }

  
  // onClick(){
  // console.log("Welcome to java Script"); 
  //}

  // onClick(){
  // console.log("Welcome to java Script"); 
  //this.greeting="welcome to java";
  //}

  //  onClick(event){
  // console.log(event);
  //this.greeting ="welcome to java world";
  //}

    onClick(event){
      console.log(event);
     this.greeting =event.type;
    }
}
