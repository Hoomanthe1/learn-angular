import { Directive, OnInit, ElementRef } from '@angular/core';


@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    private elementRef: ElementRef;
    

    constructor(elementRef: ElementRef){
        this.elementRef = elementRef;
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = "green";
        this.elementRef.nativeElement.style.color = "white";
    }
}