import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../../../interfaces/flexlunch';

@Component({
  selector: 'fl-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.scss']
})
export class OptionSelectComponent implements OnInit {
  @Input()
  get optionElement(): Option {
    return this.optionelement;
  }
  set optionElement(value: Option) {
    this.optionelement = value;
  }
  public optionelement: Option;

  constructor() {}

  ngOnInit() {}
}
