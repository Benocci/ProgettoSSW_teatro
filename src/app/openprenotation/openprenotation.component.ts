import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-openprenotation',
  templateUrl: './openprenotation.component.html',
  styleUrls: ['./openprenotation.component.css']
})
export class OpenprenotationComponent implements OnInit {
  @Input() parterre: any[] | undefined;
  @Input() stage: any[] | undefined;

  constructor() { }

  ngOnInit() {
  }

}