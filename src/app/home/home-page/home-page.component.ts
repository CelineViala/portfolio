import { Component, ElementRef, ViewChild, ViewEncapsulation,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls:['./home-page.component.css'],
  styles: [
  ]
})
export class HomePageComponent {
  @ViewChild('bulle', { static: true }) bulle!:ElementRef;
  @ViewChild('title', { static: true }) title!:ElementRef;
  @ViewChild('subtitle', { static: true }) subtitle!:ElementRef;
  @ViewChild('tabs', { static: true }) tabs!:ElementRef;
  @ViewChild('t', { static: true }) t!:ElementRef;
  @ViewChild('img1', { static: true }) img1:ElementRef;
  @ViewChild('img2', { static: true }) img2:ElementRef;
  @ViewChild('img3', { static: true }) img3:ElementRef;
  @ViewChild('img4', { static: true }) img4:ElementRef;
  @ViewChild('img5', { static: true }) img5:ElementRef;
  @ViewChild('hi', { static: true }) hi:ElementRef;
  images:ElementRef[];
  protected subtitleMsg:string="";
  protected titleMsg:string="";
  constructor(@Inject(DOCUMENT) private document: Document, private router:Router){

  }
  ngOnInit(){
    let i=0
    this.images=[this.img1,this.img2,this.img3,this.img4,this.img5];

    this.document.body.style.backgroundImage="";

      let initialWidth=this.bulle.nativeElement.width;
      const idInter=setInterval(()=>{
        
        let currentPosBottom=+(this.bulle.nativeElement.style.bottom.split("%")[0])
        if (this.bulle.nativeElement.offsetTop-this.bulle.nativeElement.height/2>0)
        {
         
          this.bulle.nativeElement.style.bottom = currentPosBottom+1+'%';
          this.bulle.nativeElement.style.width=`${this.bulle.nativeElement.width+10}px`;
        }else{
          
          this.bulle.nativeElement.setAttribute("src","https://res.cloudinary.com/dhpiuysko/image/upload/v1676388250/b2_kapwwr.png")
            
              setTimeout(() => {
                this.bulle.nativeElement.style.display="none"
                clearInterval(idInter)
                
                this.title.nativeElement.classList.add("animate__rubberBand");
               
                this.title.nativeElement.style.display='block';
                
                this.subtitle.nativeElement.classList.add("animate__rubberBand");
                this.subtitle.nativeElement.style.display='block';
                this.tabs.nativeElement.style.display="flex";
                // this.document.body.style.backgroundImage="url('https://res.cloudinary.com/dhpiuysko/image/upload/v1676844043/img_nik1gw.png')"
                this.images.forEach((node)=>{
                  node.nativeElement.style.display="block";
                })
                this.hi.nativeElement.style.display="flex";
              },80);
       
        }
        // this.bulle.nativeElement.style.left = currentPosLeft+1+'%';       
      },100)
    
  }
  handleClickTab(container:HTMLDivElement,url:string){
    this.images.forEach((node)=>{
      node.nativeElement.style.display="none";
    })
      container.classList.add("animate__fadeOutLeftBig");
      setTimeout(() => {
        this.router.navigate([`/${url}`]);
      }, 500);

  }
  handleParallax(e:any){
    

    this.img1.nativeElement.style.transform=`translateX(${e.pageX * 1.3 / 90}px)`;
    this.img2.nativeElement.style.transform=`translateY(${e.pageY * 1.3 / 80}px)`;
    this.img3.nativeElement.style.transform=`translateX(${e.pageX * 1.3 / 90}px)`;
    this.img5.nativeElement.style.transform=`translateY(${e.pageY * 1.3 / 80}px)`;
    this.img4.nativeElement.style.transform=`translateY(${e.pageY * 1.3 / 90}px)`;

  }
}
