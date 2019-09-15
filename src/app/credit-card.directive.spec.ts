import { DebugElement, Component } from "@angular/core";
import{ ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { By } from '@angular/platform-browser';
import { CreditCardDirective } from "./credit-card.directive";

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

@Component({
    template: `
        <input type="text" [value]="value" credit-card>
    `
})

class TestComponent {
    value = 123456;
}

describe('CreditCardDirective', () => {

   let component: TestComponent;
   let fixture: ComponentFixture<TestComponent>;
   let el: DebugElement;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [
             CreditCardDirective,
             TestComponent
         ]
      });
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
   });

    it('should format the string with spacing', function () {
        const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
        directive.value = '475123';
        directive.dispatchEvent(new Event('input'));
        expect(directive.value).toBe('4751 23');
        directive.value = '4567812321458952';
        directive.dispatchEvent(new Event('input'));
        expect(directive.value).toBe('4567 8123 2145 8952');
    });

    it('should have a max-length of 16 characters', function () {
        const directive = el.query(By.directive(CreditCardDirective)).nativeElement;
        directive.value = '4567812321458952';
        directive.dispatchEvent(new Event('input'));
        expect(directive.value).toBe('4567 8123 2145 8952');
    });

});