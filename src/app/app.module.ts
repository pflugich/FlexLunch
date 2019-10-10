import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OptionsOverviewComponent } from './components/options-overview/options-overview.component';
import { FL_MOCK_DATA } from 'src/assets/mocked-data/flexlunch.mock';

@NgModule({
  declarations: [AppComponent, OptionsOverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [{ provide: 'mock-data', useValue: FL_MOCK_DATA }],
  bootstrap: [AppComponent]
})
export class AppModule {}
