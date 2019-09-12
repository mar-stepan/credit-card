import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CreditCardDirective } from './credit-card.directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreditCardDirective, TooltipDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
