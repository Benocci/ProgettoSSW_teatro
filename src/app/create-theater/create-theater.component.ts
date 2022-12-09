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

  constructor(private service: TheaterService) {}

  ngOnInit() {}

  createShow() {
    this.creation = true;
  }

  confirmCreation() {
    this.service.newData().subscribe({
      next: (x: any) => {
        const chiave = x;
        const theater = new Array(7)
          .fill('')
          .map(() => Array(10).fill('x'))
          .concat(new Array(4).fill('').map(() => Array(6).fill('x')));
        this.service.setData(chiave, theater).subscribe({
          next: (x: any) => {
            this.newShow.emit(chiave);
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

    this.creation = false;
  }
}
