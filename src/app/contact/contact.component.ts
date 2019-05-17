import { Component, OnInit, Input } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  //template:'<h2>Welcome {{name}}</h2> <br> <h2 [style.color]="\'orange\'"> Style Binding</h2>',

  // NO 2 -Conditional oprator to assign the value of css property
  // template:' <h2 [style.color]="hasError ? \'orange\' : \'red\'"> Style Binding</h2>',
  
  //No 3- HighLight color using the varaible to style binding 
  //template:' <h2 [style.color]="highLightColor"> Style Binding</h2>',

  //No 4 - Using ngStyle directive to apply mutiple styles
  template:' <h2 [ngStyle]="titleStyle"> Style Binding</h2>',
  styles: []
})


export class ContactComponent implements OnInit {
public name="Angular.js";
public hasError = true;
public isSpecial = true;
public highLightColor ="orange";
public titleStyle = {
  color:"blue",
  fontStyle:"italic"
}
  constructor() { }
  ngOnInit() {
  }
}
