import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialReleaseRoutingModule } from './financial-release-routing.module';
import { FinancialReleaseComponent } from './financial-release.component';
import { CoreModule } from 'src/app/shared/core/core.module';


@NgModule({
  declarations: [
    FinancialReleaseComponent
  ],
  imports: [
    CommonModule,
    FinancialReleaseRoutingModule,
    CoreModule
  ]
})
export class FinancialReleaseModule { }
