import { Component, VERSION } from '@angular/core';
import { TheaterService } from './theater.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prenotazione teatro';
  showList: string[] = ['3054e7d3'];
  parterre: any[] = [];
  stage: any[] = [];
  showKey: string;
  bookerName: string;
  seat: { row: number; column: number; place: string } = undefined;
  notification: string;

  constructor(private service: TheaterService) {}

  createShow() {
    this.service.newData().subscribe({
      next: (x: any) => {
        const chiave = x;
        const theater = new Array(7)
          .fill('')
          .map(() => Array(10).fill('x'))
          .concat(new Array(4).fill('').map(() => Array(6).fill('x')));
        this.service.setData(chiave, theater).subscribe({
          next: (x: any) => {
            this.showList.push(chiave);
          },
          error: (err) => {
            console.error(`Observer got an error: ${JSON.stringify(err)}`);
          },
        });
      },
      error: (err) => {
        console.error(`Observer got an error: ${JSON.stringify(err)}`);
      },
    });
  }

  selectShow(key: string) {
    this.service.getData(key).subscribe({
      next: (x: any) => {
        const theater = JSON.parse(x);
        this.parterre = theater.slice(0, 7);
        this.stage = theater.slice(7);
        this.showKey = key;
      },
      error: (err) => alert('Chiave inserita non valida'),
    });
  }

  confirmReservation() {
    if (this.seat == undefined) {
      alert('Posto non selezionato!');
      return;
    }

    if (this.bookerName == undefined) {
      alert('Nome prenotazione non inserito!');
      return;
    }

    if (this.seat.place == 'platea') {
      this.parterre[this.seat.row][this.seat.column] = this.bookerName;
    } else {
      this.stage[this.seat.row][this.seat.column] = this.bookerName;
    }
    const newTheater = this.parterre.concat(this.stage);
    this.service.setData(this.showKey, newTheater).subscribe({
      next: (x: any) => {
        this.notification = 'Prenotazione avvenuta con successo!';
        this.seat = undefined;
      },
      error: (err) =>
        console.error(`Observer got an error: ${JSON.stringify(err)}`),
    });
  }
}
