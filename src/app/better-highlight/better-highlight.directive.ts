import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @Input() defaultColor: string = 'transparent'; 
  @Input() highlightColor: string = 'lightblue'; 
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.cursor') cursor: string = 'auto';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
/*     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
 */  }

  @HostListener('mouseenter') mouseOver(event: Event){
    /* this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer'); */
    this.backgroundColor = this.highlightColor;
    this.cursor = 'pointer';

  }
  @HostListener('mouseleave') mouseLeave(event: Event){
    /* this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); */
    this.backgroundColor = this.defaultColor ;
    this.cursor = 'auto';
  }
}
