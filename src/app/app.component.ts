import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from './services/options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FlexLunch';

  constructor(private router: Router, private optionsService: OptionsService) {}

  ngOnInit(): void {
    this.router.navigate(['options-overview']);
  }
}
