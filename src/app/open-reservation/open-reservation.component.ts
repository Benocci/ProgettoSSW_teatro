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
  @Output() selectedSeat = new EventEmitter<any>();
  seat: {row: number; column: number; place: string; oldName: string} = undefined;

  constructor() {}

  ngOnInit() {}

  addSeat(row: number, column: number, place: string, oldName: string) {
    this.seat = {row , column, place, oldName};
    this.selectedSeat.emit(this.seat);
  }

  paint(nome: string): string { 
    return nome !== "x" ? "red" : "green"; 
  }
}
