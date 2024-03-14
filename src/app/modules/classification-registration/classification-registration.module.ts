import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationRegistrationRoutingModule } from './classification-registration-routing.module';
import { ClassificationRegistrationComponent } from './classification-registration.component';
import { CoreModule } from 'src/app/shared/core/core.module';


@NgModule({
  declarations: [
    ClassificationRegistrationComponent
  ],
  imports: [
    CommonModule,
    ClassificationRegistrationRoutingModule,
    CoreModule
  ]
})
export class ClassificationRegistrationModule { }
