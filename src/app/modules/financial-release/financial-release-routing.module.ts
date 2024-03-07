import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialReleaseComponent } from './financial-release.component';

const routes: Routes = [
  { path: '', component: FinancialReleaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialReleaseRoutingModule { }
