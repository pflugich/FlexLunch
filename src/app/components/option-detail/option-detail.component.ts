import { Component, OnInit } from '@angular/core';
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
  activatedRout$$: Subscription;
  optionName = '';
  option: Option;

  constructor(private activatedRoute: ActivatedRoute, private optionsService: OptionsService) {}

  ngOnInit() {
    this.activatedRout$$ = this.activatedRoute.params.subscribe(result => {
      if (result) {
        console.log(result);
        this.optionName = result.name;
        this.option = this.optionsService.getOption(result.name);
      }
    });
  }
}
