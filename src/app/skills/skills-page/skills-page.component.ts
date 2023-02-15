import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {
  @ViewChild('bar', { static: true }) bar!:ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document){ 
  }

  ngOnInit(){
   
    this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676321965/fond_kbwapo.jpg')";
    this.document.querySelectorAll<HTMLElement>('.skillbar-bar').forEach((bar,i)=>{
    console.log(bar,bar.dataset['percent'] )
      const keyframe = [
        { width: '0%' },
        { width: bar.dataset['percent'] }
      ];
      const options = {
        duration: 2000,
        iterations: 1,
      }
      setTimeout(() => {
        bar.animate(keyframe,options)
        bar.style.width=`${bar.dataset['percent']}`;
        
      }, 200*i)
        
        
    
    })
  }

  test(bar:any){
    ;
  }
}
