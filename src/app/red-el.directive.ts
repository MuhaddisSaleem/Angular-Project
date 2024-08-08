import { Directive , ElementRef, asNativeElements} from '@angular/core';

@Directive({
  selector: '[appRedEL]',
  standalone: true
})
export class RedELDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="red"
  }

}
