import { DOCUMENT } from '@angular/common';
import { Component,Inject,} from '@angular/core';

import { listProjects } from '../listProjects'
import { Project } from '../project';

declare let M:any;

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls:['./projects-page.component.css']
})

export class ProjectsPageComponent {
  listProjects: Project[];
  project:Element|null;
  constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(){
    this.listProjects=listProjects
    // console.table(listProjects)
    // this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676844043/img_nik1gw.png')";
  }
  ngAfterViewInit(){
      const elems = document.querySelector('select');
      let instances = M.FormSelect.init(elems);
  }
 
  handleSelect(selectElm:HTMLSelectElement){
    const instance = M.FormSelect.getInstance(selectElm);
    const projectElm=this.document.querySelector(`#project-${instance.getSelectedValues()[0]}`)
    this.project=projectElm;
    projectElm?.scrollIntoView(true); 
  }

  goToProject(){
    this.project?.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
    
}
