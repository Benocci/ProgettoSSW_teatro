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
  fastReservation: boolean = false;
  seat: { row: number; column: number; place: string; oldName: string } =
    undefined;
  notification: string;
  reservation: boolean = false;

  constructor(private service: TheaterService) {}

  startReservation() {
    this.reservation = true;
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

  setNewSeat(newSeat: {
    row: number;
    column: number;
    place: string;
    oldName: string;
  }) {
    this.seat = newSeat;
    if (this.fastReservation) {
      this.confirmReservation();
    }
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
