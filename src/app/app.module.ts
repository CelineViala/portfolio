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
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { Home2PageComponent } from './home2/home2-page/home2-page.component';
import { ScrollDirective } from './home2/home2-page/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HoverTabDirective,
    ProfilePageComponent,
    ProjectsPageComponent,
    ParallaxDirective,
    SkillsPageComponent,
    ContactPageComponent,
    MenuPageComponent,
    Home2PageComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
