import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { listProjects } from '../listProjects'
import { Project } from '../project';
declare let simpleParallax:any;
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls:['./projects-page.component.css']
})
export class ProjectsPageComponent {
  listProjects: Project[]
  @ViewChild('imgTest', { static: true }) img!:ElementRef;
  constructor(@Inject(DOCUMENT) private document: Document){

  }
  ngOnInit(){
    this.listProjects=listProjects
    console.table(listProjects)
    this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676321965/fond_kbwapo.jpg')";
  
  }
    
}
