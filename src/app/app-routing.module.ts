import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'classification-registration' },
  { path: 'report', loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule) },
  { path: 'financial-release', loadChildren: () => import('./modules/financial-release/financial-release.module').then(m => m.FinancialReleaseModule) },
  { path: 'classification-registration', loadChildren: () => import('./modules/classification-registration/classification-registration.module').then(m => m.ClassificationRegistrationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
