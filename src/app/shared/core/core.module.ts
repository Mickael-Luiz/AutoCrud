import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';

import { CrudGeneratorComponent } from 'src/app/components/crud-generator/crud-generator.component';
import { FormGeneratorComponent } from 'src/app/components/form-generator/form-generator.component';
import { TableGeneratorComponent } from 'src/app/components/table-generator/table-generator.component';

@NgModule({
  declarations: [
    CrudGeneratorComponent,
    FormGeneratorComponent,
    TableGeneratorComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    AccordionModule,
    DialogModule,
    TooltipModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    InputMaskModule,
    InputNumberModule,
    CalendarModule
  ],
  exports: [
    CrudGeneratorComponent,
    FormGeneratorComponent,
    TableGeneratorComponent,
  ]
})
export class CoreModule { }
