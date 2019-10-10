import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from './services/options.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FlexLunch';

  userName: string;

  userName$$: Subscription;

  constructor(private router: Router, private optionsService: OptionsService) {}

  ngOnInit(): void {
    this.router.navigate(['options-overview']);
    this.userName$$ = this.optionsService.userName$.subscribe(result => {
      this.userName = result;
    });
  }
}
