import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Option } from 'src/app/interfaces/flexlunch';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'fl-option-detail',
  templateUrl: './option-detail.component.html',
  styleUrls: ['./option-detail.component.scss']
})
export class OptionDetailComponent implements OnInit {
  optionName = '';

  @Input()
  set detailOption(value: Option) {
    this.detailoption = value;
  }
  get detailOption(): Option {
    return this.detailoption;
  }
  detailoption: Option;

  constructor(private activatedRoute: ActivatedRoute, private optionsService: OptionsService) {}

  ngOnInit() {}
}
