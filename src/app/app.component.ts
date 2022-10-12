import { style } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'bookstore';
  val="invisible";

  books=[
    {id: 1,titre:"the slight edge",auteur:"jeff olson",prix:23.00},
    {id: 2,titre:"atomic habits",auteur:"james clear",prix:10.00},
    {id: 3,titre:"so good they can't ignore you",auteur:"cal newport",prix: 18.70},
    {id: 4,titre:"la maladie",auteur:"Monsieur molliaire",prix: 400}
  ]

  afficherForm(){
    this.val="visible";
  }
}