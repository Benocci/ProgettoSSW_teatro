import { Component, OnInit } from '@angular/core';
import { TheaterService } from '../theater.service';

@Component({
  selector: 'app-show-creator',
  templateUrl: './show-creator.component.html',
  styleUrls: ['./show-creator.component.css'],
})
export class ShowCreatorComponent implements OnInit {
  constructor(private service: TheaterService) {}

  ngOnInit() {}

  createNewShow() {
    this.service.newData().subscribe({
      next: (x: any) => {
        const teatro = new Array(7)
          .fill('')
          .map(() => Array(10).fill('x'))
          .concat(new Array(4).fill('').map(() => Array(6).fill('x')));
        this.service.setData(x, teatro).subscribe({
          next: (x: any) => {
            alert('Funziona');
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
