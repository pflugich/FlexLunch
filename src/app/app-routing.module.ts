import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsOverviewComponent } from './components/options-overview/options-overview.component';

const routes: Routes = [
  { path: 'options-overview', component: OptionsOverviewComponent },
  { path: '', component: OptionsOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
