import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';

import { CrudGeneratorComponent } from 'src/app/components/crud-generator/crud-generator.component';
import { FormGeneratorComponent } from 'src/app/components/form-generator/form-generator.component';
import { TableGeneratorComponent } from 'src/app/components/table-generator/table-generator.component';
import { TreeComponent } from 'src/app/components/tree/tree.component';

@NgModule({
  declarations: [
    CrudGeneratorComponent,
    FormGeneratorComponent,
    TableGeneratorComponent,
    TreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    CalendarModule,
    TreeModule,
    RadioButtonModule,
    TabViewModule
  ],
  exports: [
    CrudGeneratorComponent,
    FormGeneratorComponent,
    TableGeneratorComponent,
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
    CalendarModule,
    TreeModule,
    TreeComponent,
    RadioButtonModule,
    TabViewModule
  ]
})
export class CoreModule { }
