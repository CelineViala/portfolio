import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { listItemsCareer } from '../listProfiles'
import { ItemCareer } from '../profile';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls:['./profile-page.component.css']
})
export class ProfilePageComponent {
  
  sign:string="+";
  listItems:ItemCareer []|undefined;

  constructor(@Inject(DOCUMENT) private document: Document, private router:Router){

  }
  ngOnInit(){
    this.listItems=listItemsCareer;
    this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676321965/fond_kbwapo.jpg')";
    
  }
  toggleItem(paragraph:HTMLParagraphElement,sign:HTMLSpanElement){
    if(paragraph.style.display=="block")
    {  
      paragraph.style.display="none"
      sign.textContent='+'}
      else
      {
        paragraph.style.display="block"
        sign.scrollIntoView();
        sign.textContent='-'

    }

    
  }
}
