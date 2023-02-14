import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
declare let simpleParallax:any;

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  @ViewChild('box', { static: true }) box!:ElementRef;
  @ViewChild('wg', { static: true }) wg!:ElementRef ;
  @ViewChild('cat', { static: true }) cat!: ElementRef;
  @ViewChild('coffee', { static: true }) coffee!: ElementRef;
  @ViewChild('rocket', { static: true }) rocket!: ElementRef;
  @ViewChild('bg', { static: true }) bg!: ElementRef;
  @ViewChild('c1', { static: true }) c1!: ElementRef;
  @ViewChild('c2', { static: true }) c2!: ElementRef;
  @ViewChild('c3', { static: true }) c3!: ElementRef;
  @ViewChild('c4', { static: true }) c4!: ElementRef;
  @ViewChild('c5', { static: true }) c5!: ElementRef;
  @ViewChild('c6', { static: true }) c6!: ElementRef;
  
  protected light:boolean=true
  protected imgLight:string="https://res.cloudinary.com/dhpiuysko/image/upload/v1676150605/light_ssrzbd.png"
  protected imgNight:string="https://res.cloudinary.com/dhpiuysko/image/upload/v1676151474/night_y9iiok.png"
  protected imgItem:string="https://res.cloudinary.com/dhpiuysko/image/upload/v1676150129/n3_t9rfzi.png"
  private items:ElementRef[]=[];
  protected imgSize:number=200;
  title = 'ng-portfolio';
  ngOnInit(){
    this.items=[this.c1,this.c2,this.c3,this.c4,this.c5,this.c6];
  }

  toggleLight(){
    if (this.light) {
      document.body.style.backgroundImage=`url("https://res.cloudinary.com/dhpiuysko/image/upload/v1676149335/night_zvd1yq.jpg")`;
      this.imgItem="https://res.cloudinary.com/dhpiuysko/image/upload/v1676153288/s1_zvxp1j.png"
      this.imgSize=70;
      
    }else {
      document.body.style.backgroundImage=`url("https://res.cloudinary.com/dhpiuysko/image/upload/v1676139613/pc3_tk2l0e.jpg")`;
      this.imgItem="https://res.cloudinary.com/dhpiuysko/image/upload/v1676150129/n3_t9rfzi.png"
      this.imgSize=200;
    }
    this.items.forEach(item => {
      item.nativeElement.setAttribute("src",this.imgItem);
      item.nativeElement.setAttribute("width","50px")
      
    });
    this.light= !this.light

  }
  plus(div:HTMLElement){
    div.style.marginTop="100px";
  }
  minus(div:HTMLElement){
    div.style.marginTop="0px";
  }
  handleScroll(div:HTMLHeadingElement){
    console.log("scrolle")
    div.scrollTo(50,50)

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
    // let c5valueX= (e.pageX * -1 / 70);
    // let c5valueY= (e.pageY * -1 / 75);
    // let c6valueX= (e.pageX * -1 / 80);
    // let c6valueY= (e.pageY * -1 / 90);
    // this.c1.nativeElement.style.transform=`translate3d(${c1valueX}px,${c1valueY}px,0)`
    // this.c2.nativeElement.style.transform=`translate3d(${c2valueX}px,${c2valueY}px,0)`
    // this.c3.nativeElement.style.transform=`translate3d(${c3valueX}px,${c3valueY}px,0)`
    // this.c4.nativeElement.style.transform=`translate3d(${c4valueX}px,${c4valueY}px,0)`
    // this.c5.nativeElement.style.transform=`translate3d(${c5valueX}px,${c5valueY}px,0)`
    // this.c6.nativeElement.style.transform=`translate3d(${c6valueX}px,${c6valueY}px,0)`
 
    
    // this.wg.nativeElement.style.transform=`translate3d(${ivalueX}px,${ivalueY}px,0)`
    // this.coffee.nativeElement.style.transform=`translate3d(${covalueX}px,${covalueY}px,0)`
    // this.rocket.nativeElement.style.transform=`translate3d(${rvalueX}px,${rvalueY}px,0)`
  }
  handleMouseEnter(title:HTMLHeadingElement){
    console.log(title)
    title.style.color="#738DCD";
    
  }
  handleMouseLeave(title:HTMLHeadingElement){
    console.log(title)
    title.style.color="#ACAAD9";
    
  }


}
