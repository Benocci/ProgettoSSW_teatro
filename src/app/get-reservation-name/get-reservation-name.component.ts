import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-reservation-name',
  templateUrl: './get-reservation-name.component.html',
  styleUrls: ['./get-reservation-name.component.css'],
})
export class GetReservationNameComponent implements OnInit {
  @Input() key: string | undefined;

  name: string;

  constructor() {}

  ngOnInit() {}

  changeName(name: string) {
    this.name = name;
  }
}
