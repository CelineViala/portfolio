import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { SkillsPageComponent } from './skills/skills-page/skills-page.component';


const routes: Routes = [
  
  {path:'',component:HomePageComponent},
  {path:'profile',component:ProfilePageComponent},
  {path:'projects',component:ProjectsPageComponent},
  {path:'skills',component:SkillsPageComponent},
  {path:'contact',component:ContactPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
