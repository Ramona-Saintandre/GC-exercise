import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpDownCounterComponent } from './up-down-counter/up-down-counter.component';
import { BoxComponent } from './box/box.component';
import { ButtonComponent } from './button/button.component';
import { ButtondownComponent } from './buttondown/buttondown.component';

@NgModule({
  declarations: [
    AppComponent,
    UpDownCounterComponent,
    BoxComponent,
    ButtonComponent,
    ButtondownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
