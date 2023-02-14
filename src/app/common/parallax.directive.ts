import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  @Input('elm') elm : any
  initialTop : number = 0
 
  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener('document:scroll')
  onWindowScroll(){
    const screenY=window.scrollY+window.innerHeight/2;
    const diffY=this.initialTop-screenY;
    this.eleRef.nativeElement.style.setProperty("transform",`translatex(${diffY*-0.4*this.parallaxRatio}px)`)
    // this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}