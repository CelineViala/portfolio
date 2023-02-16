import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  
})
export class ContactPageComponent {

  @ViewChild('title', { static: true }) title:ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document, private router:Router){

  }
  ngOnInit(){
    this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676321965/fond_kbwapo.jpg')";
    // this.title.nativeElement.scrollIntoView()
  }
}
