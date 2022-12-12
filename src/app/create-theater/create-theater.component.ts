import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TheaterService } from '../theater.service';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css'],
})
export class CreateTheaterComponent implements OnInit {
  @Output() newShow = new EventEmitter<string>();
  creation: boolean = false;
  row_parterre: number = 7;
  column_parterre: number = 10;
  row_stage: number = 4;
  column_stage: number = 6;

  notification: string;

  constructor(private service: TheaterService) {}

  ngOnInit() {}

  createShow() {
    this.creation = true;
  }

  setRowParterre(value: string) {
    this.row_parterre = parseFloat(value);
  }

  setColumnParterre(value: string) {
    this.column_parterre = parseFloat(value);
  }

  setRowStage(value: string) {
    this.row_stage = parseFloat(value);
  }

  setColumnStage(value: string) {
    this.column_stage = parseFloat(value);
  }

  confirmCreation() {
    this.service.newData().subscribe({
      next: (x: any) => {
        const chiave = x;
        const theater = new Array(this.row_parterre)
          .fill('')
          .map(() => Array(this.column_parterre).fill('x'))
          .concat(
            new Array(this.row_stage)
              .fill('')
              .map(() => Array(this.column_stage).fill('x'))
          );
        const num_slice: any[] = [this.row_parterre];
        const infoTheater = num_slice.concat(theater);
        this.service.setData(chiave, infoTheater).subscribe({
          next: (x: any) => {
            this.newShow.emit(chiave);

            this.notification =
              'Creazione del nuovo spettacolo con codice: "' +
              chiave +
              '" in un teatro con platea di ' +
              this.row_parterre +
              ' file con ' +
              this.column_parterre +
              ' posti e un palco di ' +
              this.row_stage +
              ' file di ' +
              this.column_stage +
              ' posti.';
          },
          error: (err) => {
            alert(`Errore nella setData: ${JSON.stringify(err)}`);
          },
        });
      },
      error: (err) => {
        alert(`Errore nella newData: ${JSON.stringify(err)}`);
      },
    });

    this.creation = false;
  }
}
