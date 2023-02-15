import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HoverTabDirective } from './hover-tab.directive';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { ParallaxDirective } from './common/parallax.directive';
import { SkillsPageComponent } from './skills/skills-page/skills-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HoverTabDirective,
    ProfilePageComponent,
    ProjectsPageComponent,
    ParallaxDirective,
    SkillsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
