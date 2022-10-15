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
  disp="d-none";
  books=[
    {id: 1,titre:"the slight edge",auteur:"jeff olson",prix:23.00,lien:"https://m.media-amazon.com/images/I/41hC5Pli3SL.jpg"},
    {id: 2,titre:"atomic habits",auteur:"james clear",prix:10.00,lien:"https://m.media-amazon.com/images/I/51-uspgqWIL._AC_SY780_.jpg"},
    {id: 3,titre:"so good they can't ignore you",auteur:"cal newport",prix: 18.70,lien:"https://m.media-amazon.com/images/I/41sAVddTaAL._SX328_BO1,204,203,200_.jpg"},
    {id: 4,titre:"la maladie",auteur:"Monsieur molliaire",prix: 400,lien:"https://bibliothequenumerique.tv5monde.com/media/img/3c0/04/123_Le-Malade-imaginaire.jpg"}
  ]

  afficherForm(){
    this.disp="d-block";
  }

  
}