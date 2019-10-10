import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { OptionsOverviewComponent } from './components/options-overview/options-overview.component';
import { FL_MOCK_DATA } from 'src/assets/mocked-data/flexlunch.mock';
import { UsernameInputComponent } from './components/username-input/username-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, OptionsOverviewComponent, UsernameInputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [{ provide: 'mock-data', useValue: FL_MOCK_DATA }],
  bootstrap: [AppComponent],
  entryComponents: [UsernameInputComponent]
})
export class AppModule {}
