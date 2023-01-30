import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appInputValidation]'
})
export class InputValidationDirective {

  regexStr = '^[a-zA-Z0-9_]*$';

    constructor(private el: ElementRef) { }

    @HostListener('keypress', ['$event'])
     onKeyPress(event: KeyboardEvent) {
      console.log('key pressed: ');
      console.log(event);

        return new RegExp(this.regexStr).test(event.key);
    }

    @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
      this.validateFields(event);
    }

    validateFields(event: KeyboardEvent) {
      setTimeout(() => {
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
        event.preventDefault();

      }, 100)
    }

}
