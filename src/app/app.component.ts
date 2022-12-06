import { Component, VERSION } from '@angular/core';
import { TheaterService } from './theater.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prenotazione teatro';
  show: string[] = ['71dc513b'];

  constructor(private service: TheaterService) {}

  createShow(key: string) {}

  openShow(key: string) {
    this.service.getData(key).subscribe(
      
    )
  }
}
