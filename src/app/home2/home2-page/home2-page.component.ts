import { Component, ElementRef, ViewChild, ViewEncapsulation,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2-page',
  templateUrl: './home2-page.component.html',
  styleUrls:['./home2-page.component.css'],
  styles: [
  ]
})
export class Home2PageComponent {
  @ViewChild('bulle', { static: true }) bulle:ElementRef;
  @ViewChild('title', { static: true }) title:ElementRef;
  @ViewChild('content', { static: true })  content:ElementRef;
  @ViewChild('scroll', { static: true })  scroll:ElementRef;
  @ViewChild('subtitle', { static: true }) subtitle:ElementRef;
  @ViewChild('intro', { static: true }) intro:ElementRef;
  @ViewChild('img', { static: true }) img:ElementRef;
  @ViewChild('box', { static: true }) box:ElementRef;

 
  protected subtitleMsg:string="";
  protected titleMsg:string="";
  
  ngOnInit(){
    window.addEventListener('orientationchange',()=>{
      //console.log("change")
      this.box.nativeElement.scrollBy(0,-1)
    })
    let i=0
    /**
     * to move the bubble from the bottom to the top
     */
      const idInter=setInterval(()=>{
        let currentPosBottom=+(this.bulle.nativeElement.style.bottom.split("%")[0])
        if (this.bulle.nativeElement.offsetTop-this.bulle.nativeElement.height/2>0)
        {
          this.bulle.nativeElement.style.bottom = currentPosBottom+1+'%';
          this.bulle.nativeElement.style.width=`${this.bulle.nativeElement.width+10}px`;
        }else{
          // this.bulle.nativeElement.setAttribute("src","https://res.cloudinary.com/dhpiuysko/image/upload/v1676388250/b2_kapwwr.png");
          setTimeout(() => {
            this.bulle.nativeElement.style.display="none";
            clearInterval(idInter);
            this.title.nativeElement.classList.add("animate__rubberBand");
            this.subtitle.nativeElement.classList.add("animate__rubberBand");
            this.content.nativeElement.style.display='flex';
            const welcomeText="Hello world ! Je suis Céline, développeuse Junior passionnée !";
            setTimeout(() => {
              
              this.img.nativeElement.style.display="block";
            }, 800);
            this.intro.nativeElement.textContent="";
            i=0;
            setInterval(()=>{
              if (i<welcomeText.length) {this.intro.nativeElement.textContent+=welcomeText[i];i++}
              else{ 
                this.scroll.nativeElement.style.opacity=1;
                this.scroll.nativeElement.classList.add("animate__pulse");
              }
            },35)
          },80);
        }     
      },100) 
  }

  clickScroll(elm:HTMLDivElement,dir:number){
    elm.scrollBy(0,dir)
  }
 
  
  
}
