import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-reservation-name',
  templateUrl: './get-reservation-name.component.html',
  styleUrls: ['./get-reservation-name.component.css'],
})
export class GetReservationNameComponent implements OnInit {
  @Input() key: string | undefined;
  @Output() newBookerName = new EventEmitter<string>();
  name: string;

  constructor() {}

  ngOnInit() {}

  changeName(newName: string) {
    if (newName != '') {
      this.name = newName;
      this.newBookerName.emit(this.name);
    }
  }
}
