import { Component, ElementRef, Inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent {
  @ViewChild('burger', { static: true }) burger!:ElementRef;
  @ViewChild('content', { static: true }) content!:ElementRef;

  private colors=['#ffa801','#3c40c6','#218c74','#e263e4'];

  openedMenu:boolean=false;
  private previousUrl:string="/menu";
  

  constructor(@Inject(DOCUMENT) private document: Document,protected router:Router, private location:Location){}
 
  ngOnInit(){
    //unallow pinch zoom
    this.document.addEventListener('wheel', event => {
      const { ctrlKey } = event
      if (ctrlKey) {
         event.preventDefault();
         return
      }
   }, { passive: false })

   
   //change burger color
    let i=0,j=0
    setInterval(()=>{
      i+=1
      i%=4
      this.burger.nativeElement.style.color=this.colors[i];
    },3000)
    
  }
  
  handleClickBurger(url:string){
    // this.burger.nativeElement.style.transform="rotate(-360deg)";
    
  
    if (!this.openedMenu) this.router.navigate(["/menu"])
    else {
      if(this.previousUrl=="/menu") this.router.navigate(['/'])
      else
      {this.router.navigate([this.previousUrl])}
    }
    this.previousUrl=url
    console.log(url,this.openedMenu)
   
  }
  
  handleParallax(e:any){
    // let c2valueX= (e.pageX * 1.3 / 30);
    // let c2valueY= (e.pageY * 1.3 / 30);
    // let c1valueX= (e.pageX * -1 / 55);
    // let c1valueY= (e.pageY * -1 / 60);
    // let c3valueX= (e.pageX * -1.8 / 45);
    // let c3valueY= (e.pageY * -1.8 / 50);
    // let c4valueX= (e.pageX * -0.2 / 25);
    // let c4valueY= (e.pageY * -.21 / 22);

  }
 



}
