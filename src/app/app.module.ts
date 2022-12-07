import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TheaterService } from './theater.service';
import { OpenreservationComponent } from './openreservation/openreservation.component'

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, OpenreservationComponent],
  providers: [TheaterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
