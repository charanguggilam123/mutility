import { Directive,ElementRef,HostBinding,HostListener,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private el : ElementRef,private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement,'background-color','blue')
  }

  @HostBinding('style.backgroundColor')
  private bgColor: String = 'red'

  @HostListener('mouseover',['$event'])
  mouseHover(event: Event){
    this.bgColor='green'
    // this.renderer.setStyle(this.el.nativeElement,'background-color','yellow')
  }

}
