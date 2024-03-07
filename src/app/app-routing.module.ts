import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'financial-release' },
  { path: 'report', loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule) },
  { path: 'financial-release', loadChildren: () => import('./modules/financial-release/financial-release.module').then(m => m.FinancialReleaseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
