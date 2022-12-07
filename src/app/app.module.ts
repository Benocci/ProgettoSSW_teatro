import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TheaterService } from './theater.service';
import { OpenreservationComponent } from './open-reservation/open-reservation.component';
import { GetReservationNameComponent } from './get-reservation-name/get-reservation-name.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    OpenreservationComponent,
    GetReservationNameComponent,
  ],
  providers: [TheaterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
