import { Directive, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  initial:number=0
  previousScroll:number=-1
  direction:number=0;

  @Input('home') home:any;
  @Input('projects') projects:any;
  @Input('profile') profile:any;
  @Input('skills') skills:any;
  @Input('contact') contact:any;
  @Input('bubble') bubble:any;

  sections:any[]


  constructor(private eleRef : ElementRef) { }
  ngOnInit(){
    this.sections=[this.home,this.projects,this.profile,this.skills,this.contact]
    //console.log(this.sections)
  }
  @HostListener('scroll')
  onWindowScroll(){
      //console.log("scroo")
      if(this.direction==0 && this.eleRef.nativeElement.scrollTop>this.previousScroll){
        this.direction=1 
        this.initial+=1
      
        //console.log(this.initial)
        this.sections[this.initial].scrollIntoView()
        this.previousScroll=this.eleRef.nativeElement.scrollTop;
        setTimeout(() => {
          this.direction=0;
          this.eleRef.nativeElement.style.overflowY="scroll"
        }, 900);
      }
      if(this.direction==0 && this.eleRef.nativeElement.scrollTop<this.previousScroll){
        this.direction=-1
        this.initial-=1
        
        //console.log(this.initial)
        this.sections[this.initial].scrollIntoView()
        this.previousScroll=this.eleRef.nativeElement.scrollTop;
        setTimeout(() => {
          this.direction=0;
          this.eleRef.nativeElement.style.overflowY="scroll"
        }, 900);
      }
      
      if (this.initial!=0)
      {  this.bubble.style.opacity=0}
        else{
        this.bubble.style.opacity=1}
      //console.log(scrollY)
      this.eleRef.nativeElement.style.overflowY="hidden"
      this.eleRef.nativeElement.scrollTop=this.previousScroll
     
    }

    @HostListener('scrollend')
    onWindowScrollend(){
      //console.log("end")
    }
    
}
