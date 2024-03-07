import { Component, Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent {

  @Input() formFields: IFormField[] = []

}
