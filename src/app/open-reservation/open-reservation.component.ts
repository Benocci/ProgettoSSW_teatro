import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-openreservation',
  templateUrl: './open-reservation.component.html',
  styleUrls: ['./open-reservation.component.css'],
})
export class OpenreservationComponent implements OnInit {
  @Input() parterre: any[] | undefined;
  @Input() stage: any[] | undefined;

  constructor() {}

  ngOnInit() {}
}
