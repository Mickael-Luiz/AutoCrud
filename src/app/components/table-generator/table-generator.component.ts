import { Component, Input } from '@angular/core';
import { IButtonTable } from 'src/app/interface/IButtonsColumn';
import { IFormField } from 'src/app/interface/IFormField';
import { ITableField } from 'src/app/interface/ITableFields';

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.scss']
})
export class TableGeneratorComponent {

  @Input() tableFields: ITableField[] = []
  @Input() data: any[] = []

}
