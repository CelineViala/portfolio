import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';

declare let simpleParallax:any;
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls:['./projects-page.component.css']
})
export class ProjectsPageComponent {
  @ViewChild('imgTest', { static: true }) img!:ElementRef;
  constructor(@Inject(DOCUMENT) private document: Document){

  }
  ngOnInit(){
   
    this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676321965/fond_kbwapo.jpg')";
    new simpleParallax(this.img.nativeElement,{overflow: true})
  }
    
}
