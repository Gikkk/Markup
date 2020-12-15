import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMainContent]'
})
export class MainContentDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event){
    let myHeight = event.target.innerHeight;
    this.renderer.setStyle( this.el.nativeElement, 'height', `${myHeight}px`);
  }

  ngOnInit() {
    let myHeight: number = window.innerHeight;
    this.renderer.setStyle( this.el.nativeElement, 'height', `${myHeight}px`);
  }
}
