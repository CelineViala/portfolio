
import { Component, ElementRef, QueryList,ViewChildren } from '@angular/core';

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

  ngOnInit(){
    this.listSkills=listSkills;
  }
  
  ngAfterViewInit(){
    const bars=this.bar.toArray()
    // this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676844043/img_nik1gw.png')";

    bars.forEach((bar,i)=>{
    //console.log(bar,bar.nativeElement.dataset['percent'] )
      const keyframe = [
        { width: '0%' },
        { width: bar.nativeElement.dataset['percent'] }
      ];
      const options = {
        duration: 2000,
        iterations: 1,
      };
      setTimeout(() => {
        bar.nativeElement.animate(keyframe,options);
        bar.nativeElement.style.width=`${bar.nativeElement.dataset['percent']}`;
        this.load.get(i)!.nativeElement.textContent=this.listSkills[i].since;
        this.load.get(i)!.nativeElement.style.fontWeight=900;
      }, 500*i)
    })
  }
}
