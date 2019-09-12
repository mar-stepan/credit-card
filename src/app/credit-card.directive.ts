import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core'

@Directive({
  selector: '[credit-card]'
})

export class CreditCardDirective {

@HostBinding('style.border')
border: string;

 @HostListener('input', ['$event'])
 onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let number = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      number.push(trimmed.substr(i, 4))
    }

    input.value = number.join(' ');

    this.border = '';
    if (/[^\d]+/.test(trimmed)) {
      this.border = '4px solid red'
    }

 }

}