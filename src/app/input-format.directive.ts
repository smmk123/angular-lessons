import { Directive, HostListener, ElementRef, Input } from '@angular/core';
//host listener listes to the DOM to know when to access this directive
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  @Input('appInputFormat') format:any;
  
  @HostListener('Focus') onFocus(){
      console.log("on Focus");
  }
  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    if(this.format=='lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value =value.toUpperCase();
  }
  

}
