import { Component, OnInit, Input } from '@angular/core';
import { Time } from 'src/app/interfaces/flexlunch';

@Component({
  selector: 'fl-time-detail',
  templateUrl: './time-detail.component.html',
  styleUrls: ['./time-detail.component.scss']
})
export class TimeDetailComponent implements OnInit {
  @Input()
  set detailTime(value: Time) {
    this.detailtime = value;
  }
  get detailTime(): Time {
    return this.detailtime;
  }
  detailtime: Time;

  constructor() {}

  ngOnInit() {}
}
