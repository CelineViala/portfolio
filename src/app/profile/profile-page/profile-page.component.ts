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

  constructor(){}
  ngOnInit(){
    this.listItems=listItemsCareer;    
  }
  toggleItem(paragraph:HTMLParagraphElement,sign:HTMLSpanElement){
    if(paragraph.style.display=="block")
    {  
      paragraph.style.display="none";
      sign.textContent='+';
    }else{
      paragraph.style.display="block";
      sign.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      sign.textContent='-';
    }

    
  }
}
