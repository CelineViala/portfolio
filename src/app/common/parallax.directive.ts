import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  @Input('elm') elm : any
  initialTop : number = 0
  isVisible:boolean=false;
  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }
  ngOnInit(){
    // const observer=new IntersectionObserver((entries)=>{
    //   for (const entry of entries){
    //  console.log(entry)
    //     if(entry.isIntersecting){
    //       this.isVisible=true;
    //     }else{
    //       this.isVisible=false;
    //     }
    //   }
    // })
    // observer.observe(this.eleRef.nativeElement)
  }
  offset(element:any,acc=0) :any{
    if(element.offsetParent)
      return this.offset(element.offsetParent, acc+element.offsetTop)
    return acc+element.offsetTop
  }
  @HostListener('document:scroll')
    onWindowScroll(){
      

        const screenY=scrollY+window.innerHeight/2;
        const diffY=this.offset(this.eleRef.nativeElement)-scrollY;
        let t=diffY*-0.2*this.parallaxRatio
        
      
        this.eleRef.nativeElement.style.setProperty("transform",`translatex(${t}px)`)
        // //console.log(this.eleRef.nativeElement,this.offset(this.eleRef.nativeElement),scrollY)
      // this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
    }

}