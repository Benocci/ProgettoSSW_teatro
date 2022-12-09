import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TheaterService } from '../theater.service';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css'],
})
export class CreateTheaterComponent implements OnInit {
  @Output() newShow = new EventEmitter<string>();

  constructor(private service: TheaterService) {}

  ngOnInit() {}

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
  }
}
