import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-openreservation',
  templateUrl: './open-reservation.component.html',
  styleUrls: ['./open-reservation.component.css'],
})
export class OpenreservationComponent implements OnInit {
  @Input() parterre: any[] | undefined;
  @Input() stage: any[] | undefined;
  @Input() bookerName: string | undefined;
  @Input() fastReservation: boolean = false;
  @Output() selectedSeat = new EventEmitter<any>();
  seat: { row: number; column: number; place: string; oldName: string } =
    undefined;

  constructor() {}

  ngOnInit() {}

  addSeat(row: number, column: number, place: string, oldName: string) {
    this.seat = { row, column, place, oldName };
    this.selectedSeat.emit(this.seat);
  }

  colorSeat(seat: string, row: number, column: number, place: string) {
    if (seat === 'x') {
      if (this.seat != undefined) {
        if (
          this.seat.row == row &&
          this.seat.column == column &&
          this.seat.place == place &&
          !this.fastReservation
        ) {
          return 'yellow';
        }
      }
      return '#8FBC8F';
    } else {
      return '#FF6347';
    }
  }
}
