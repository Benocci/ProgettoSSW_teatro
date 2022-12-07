import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TheaterService } from './theater.service';
import { ShowCreatorComponent } from './show-creator/show-creator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, ShowCreatorComponent],
  providers: [TheaterService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
