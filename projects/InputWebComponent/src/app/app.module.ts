import { UiInputComponent } from './ui-input/ui-input.component';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

@NgModule({
  declarations: [UiInputComponent],
  imports: [BrowserModule],
  entryComponents: [UiInputComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(
      UiInputComponent,
      injector
    );
    const webComponent = createCustomElement(UiInputComponent, {
      injector,
      strategyFactory,
    });
    customElements.define('ui-input', webComponent);
  }

  ngDoBootstrap() {}
}
