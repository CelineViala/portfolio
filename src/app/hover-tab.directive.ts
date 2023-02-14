import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverTab]'
})
export class HoverTabDirective {
  

  private initialColorText:string="rgb(153, 147, 147)";
  private textDescription:string="";
  private intervalId:any;
  
  constructor(private el:ElementRef) { 
    this.setColor(this.initialColorText);
    this.textDescription=""
  }
  @Input('appHoverTab')
  param!: any[];
  
  @HostListener('mouseenter') onMouseEnter(){
    this.setColor("black");
    this.el.nativeElement.style.backgroundColor=this.param[2];
    if(this.param[1])
    {
      this.textDescription=this.param[1].textContent;
      this.param[1].style.color=this.param[2];
      this.param[1].textContent="";
      this.param[1].style.display="block";
      let i=0
      this.intervalId=setInterval(()=>{
        if(i<this.textDescription.length)
        {this.param[1].textContent+=this.textDescription[i]
        i+=1}
      },50
    )}
    if(this.param[0])
    {
      this.param[0].style.display="block";
      this.param[0].classList.add("animate__pulse")
    }

  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setColor(this.initialColorText);
    this.el.nativeElement.style.backgroundColor="";
    if(this.param[0])
    {
      this.param[0].style.display="none";
    }
    if(this.param[1])
    {
      this.param[1].textContent=this.textDescription;
      this.param[1].style.display="none";
      clearInterval(this.intervalId);
    }
  }
 

  private setColor(color:string){
    this.el.nativeElement.style.color=color;
  }
}
