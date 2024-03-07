import { Component, Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { ITableField } from 'src/app/interface/ITableFields';

@Component({
  selector: 'app-crud-generator',
  templateUrl: './crud-generator.component.html',
  styleUrls: ['./crud-generator.component.scss']
})
export class CrudGeneratorComponent {

  @Input() filterFields: IFormField[] = []
  @Input() formFields: IFormField[] = []
  @Input() tableFields: ITableField[] = []
  @Input() data: any[] = []
  @Input() operationTitle: string = 'Sem Título'

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
