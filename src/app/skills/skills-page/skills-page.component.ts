import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { listSkills } from './listSkills';
import { Skill } from './skill';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {
  listSkills:Skill[];
  @ViewChildren('bar') bar: QueryList<ElementRef>
  @ViewChildren('load') load: QueryList<ElementRef>

  constructor(@Inject(DOCUMENT) private document: Document){ 
  }

  ngOnInit(){
    this.listSkills=listSkills;
  }
  ngAfterViewInit(){
    console.log(this.bar)
    const bars=this.bar.toArray()
    this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676321965/fond_kbwapo.jpg')";

    bars.forEach((bar,i)=>{
    console.log(bar,bar.nativeElement.dataset['percent'] )
      const keyframe = [
        { width: '0%' },
        { width: bar.nativeElement.dataset['percent'] }
      ];
      const options = {
        duration: 2000,
        iterations: 1,
      }
      setTimeout(() => {
        bar.nativeElement.animate(keyframe,options)
        bar.nativeElement.style.width=`${bar.nativeElement.dataset['percent']}`;
        console.log(this.listSkills[i].since)
        
        
        this.load.get(i)!.nativeElement.textContent=this.listSkills[i].since;
        this.load.get(i)!.nativeElement.style.fontWeight=900;
      }, 500*i)
        
        
    
    })
  }

  test(bar:any){
    ;
  }
}
