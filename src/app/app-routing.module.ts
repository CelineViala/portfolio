import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { Home2PageComponent } from './home2/home2-page/home2-page.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { SkillsPageComponent } from './skills/skills-page/skills-page.component';


const routes: Routes = [
  
  {path:'',component:Home2PageComponent},
  {path:'profile',component:ProfilePageComponent},
  {path:'projects',component:ProjectsPageComponent},
  {path:'skills',component:SkillsPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'menu',component:MenuPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
