import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationRegistrationComponent } from './classification-registration.component';

const routes: Routes = [
  {path: '', component: ClassificationRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificationRegistrationRoutingModule { }
