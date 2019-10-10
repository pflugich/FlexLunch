import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fl-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss']
})
export class UsernameInputComponent implements OnInit {
  public nameToSet: String = '';

  constructor() {}

  ngOnInit() {}
}
