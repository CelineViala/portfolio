import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
declare let simpleParallax:any;

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  @ViewChild('burger', { static: true }) burger!:ElementRef;
  private colors=['#ffa801','#3c40c6','#218c74','#FBA7FD']
  
 
  ngOnInit(){
    let i=0
    setInterval(()=>{
      i+=1
      i%=4
      this.burger.nativeElement.style.color=this.colors[i]

    },3000)
  
  }

  handleClickBurger(){
    console.log("click")
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
