import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SbxNgScaledModule } from 'sbx-ng-scaled';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SbxNgScaledModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
