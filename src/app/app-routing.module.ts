import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsOverviewComponent } from './components/options-overview/options-overview.component';
import { OptionDetailComponent } from './components/option-detail/option-detail.component';

const routes: Routes = [
  { path: 'options-overview', component: OptionsOverviewComponent },
  { path: 'option-detail', component: OptionDetailComponent },
  { path: '', component: OptionsOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
