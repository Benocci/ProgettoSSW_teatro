import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-reservation-name',
  templateUrl: './get-reservation-name.component.html',
  styleUrls: ['./get-reservation-name.component.css'],
})
export class GetReservationNameComponent implements OnInit {
  @Input() key: string | undefined;
  @Output() newBookerName = new EventEmitter<string>();
  @Output() isFastReservation = new EventEmitter<boolean>();
  name: string;
  fastReservation: boolean = false;

  constructor() {}

  ngOnInit() {}

  changeName(newName: string) {
    if (newName != '') {
      if (newName == 'x') {
        alert("Nome 'x' riservato, si prega di utilizzarne un altro.");
        return;
      }
      this.name = newName;
      this.newBookerName.emit(this.name);
    }
  }

  setFastReservation(value: boolean) {
    this.fastReservation = value;
    this.isFastReservation.emit(this.fastReservation);
  }
}
