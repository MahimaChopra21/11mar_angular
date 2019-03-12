import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ChangecolorDirective } from './changecolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ChangecolorDirective
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
