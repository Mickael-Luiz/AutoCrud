import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationRegistrationListComponent } from './classification-registration-list/classification-registration-list.component';

const routes: Routes = [
  {path: '', component: ClassificationRegistrationListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificationRegistrationRoutingModule { }
