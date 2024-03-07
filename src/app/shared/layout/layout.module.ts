import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { LayoutComponent } from './layout.component';
import { ReportModule } from 'src/app/modules/report/report.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReportModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
