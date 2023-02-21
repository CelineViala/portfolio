import { DOCUMENT } from '@angular/common';
import { Component, ContentChild, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { bufferToggle } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent {
  
  constructor(private rootComponent: AppComponent, protected router:Router){}
  ngOnInit(){
    
    this.rootComponent.openedMenu=true;
    this.rootComponent.burger.nativeElement.textContent="close";
    this.rootComponent.burger.nativeElement.classList.remove("animate__flip");
    setTimeout(() => {
      this.rootComponent.burger.nativeElement.classList.add("animate__flip");
    },50);
    
  }
  ngOnDestroy(){
    this.rootComponent.openedMenu=false;
    this.rootComponent.burger.nativeElement.textContent="menu";
    this.rootComponent.burger.nativeElement.classList.remove("animate__flip");
    setTimeout(() => {
      this.rootComponent.burger.nativeElement.classList.add("animate__flip");
    },50);
  }
  navigate(url:string){
    
    this.router.navigate([url])
  }
}
