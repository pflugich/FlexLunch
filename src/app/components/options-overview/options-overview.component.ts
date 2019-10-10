import { Component, OnInit } from '@angular/core';
import { FlexLunch, Option } from 'src/app/interfaces/flexlunch';
import { OptionsService } from 'src/app/services/options.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fl-options-overview',
  templateUrl: './options-overview.component.html',
  styleUrls: ['./options-overview.component.scss']
})
export class OptionsOverviewComponent implements OnInit {
  public options: Option[] = [];

  constructor(private optionsService: OptionsService, private router: Router) {}

  ngOnInit() {
    this.options = this.optionsService.getOptions();
  }

  public showOption(name: string) {
    this.router.navigate(['option-detail'], { queryParams: { optionName: name } });
  }
}
