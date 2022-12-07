import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-openreservation',
  templateUrl: './openreservation.component.html',
  styleUrls: ['./openreservation.component.css'],
})
export class OpenreservationComponent implements OnInit {
  @Input() parterre: any[] | undefined;
  @Input() stage: any[] | undefined;

  constructor() {}

  ngOnInit() {}
}
