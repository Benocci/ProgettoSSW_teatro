import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-reservation-name',
  templateUrl: './get-reservation-name.component.html',
  styleUrls: ['./get-reservation-name.component.css'],
})
export class GetReservationNameComponent implements OnInit {
  @Input() key: string | undefined;
  @Output() newBookerName = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  changeName(name: string) {
    this.newBookerName.emit(name);
  }
}
