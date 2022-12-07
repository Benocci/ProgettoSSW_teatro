import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-openreservation',
  templateUrl: './open-reservation.component.html',
  styleUrls: ['./open-reservation.component.css'],
})
export class OpenreservationComponent implements OnInit {
  @Input() parterre: any[] | undefined;
  @Input() stage: any[] | undefined;
  @Output() selectedSeat = new EventEmitter<any>();
  seat: {row: number; column: number; place: string} = undefined;

  constructor() {}

  ngOnInit() {}

  addSeat(row: number, column: number, place: string) {
    this.seat = {row , column, place};
    this.selectedSeat.emit(this.seat);
  }
}
