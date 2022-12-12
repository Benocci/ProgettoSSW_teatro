import { Component, VERSION } from '@angular/core';
import { TheaterService } from './theater.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prenotazione teatro';
  showList: string[] = ['2293a957']; //lista di codici collegati agli spettacoli
  parterre: any[] = []; //array di array di stringhe che rappresenta i posti della platea
  stage: any[] = []; //array di array di stringhe che rappresenta i posti del palco
  showKey: string; //chiave dello spettacolo che è attivo al momento
  bookerName: string; //nome della prenotazione attiva al momento
  fastReservation: boolean = false; //booleano che indica se è attiva la prenotazione veloce
  seat: { row: number; column: number; place: string; oldName: string } =
    undefined; //posto selezionato oppure appena prenotato
  notification: string; //stringa di notifica

  reservation: boolean = false;

  constructor(private service: TheaterService) {}

  startReservation() {
    this.reservation = true;
  }

  selectShow(key: string) {
    this.service.getData(key).subscribe({
      next: (x: any) => {
        const theater = JSON.parse(x);
        const numParterreRow = theater[0];
        this.parterre = theater.slice(1, numParterreRow + 1);
        this.stage = theater.slice(numParterreRow + 1);
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
    if (this.fastReservation && this.seat.oldName == 'x') {
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
    const newTheaterTmp = this.parterre.concat(this.stage);
    const num_slice: any[] = [this.parterre.length];
    const newTheater = num_slice.concat(newTheaterTmp);
    this.service.setData(this.showKey, newTheater).subscribe({
      next: (x: any) => {
        this.notification =
          'Prenotazione del posto ' +
          (this.seat.column + 1) +
          ' in fila ' +
          (this.seat.row + 1) +
          ' nella sezione ' +
          this.seat.place +
          ' avvenuta con successo!';
        this.seat = undefined;
      },
      error: (err) => {
        alert(`Errore nella setData: ${JSON.stringify(err)}`);
      },
    });
  }
}
