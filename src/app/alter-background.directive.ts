import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appAlterBackground]'
})
export class AlterBackgroundDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = "1px solid red";
    this.el.nativeElement.style.padding = "20px";
    this.el.nativeElement.style.background = "linear-gradient(orange,white,green)";
   }

}
