import { Component, OnInit, Input } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles:['.text-success{color:green;}.text-danger{color:red;.text-special{font-style:italic}}'],
  template: '<br><br><br><h2 [class]="sucessClass">Hello</h2><h2 [class.text-danger]="hasError">Code Evolution</h2> <br><h2 [ngClass]="messageClass">Message Class</h2>'
})


export class ContactComponent implements OnInit {
public sucessClass="text-success";
public textDanger="text-danger";
public textSpecial="text-special";
public hasError = false;
public isSpecial = true;
public messageClass= {
  "text-success" : !this.hasError, //true
  "text-danger": this.hasError, //false
  "text-special":this.isSpecial //true
}

  constructor() { }

  ngOnInit() {
  }
















}
