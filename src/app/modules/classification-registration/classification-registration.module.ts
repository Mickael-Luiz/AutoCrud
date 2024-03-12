import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationRegistrationRoutingModule } from './classification-registration-routing.module';
import { ClassificationRegistrationListComponent } from './classification-registration-list/classification-registration-list.component';
import { CoreModule } from 'src/app/shared/core/core.module';


@NgModule({
  declarations: [
    ClassificationRegistrationListComponent
  ],
  imports: [
    CommonModule,
    ClassificationRegistrationRoutingModule,
    CoreModule
  ]
})
export class ClassificationRegistrationModule { }
