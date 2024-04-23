import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IFormField } from 'src/app/interface/IFormField';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent {

  @Input() formFields: IFormField[] = []
  @Input() saveButton: boolean = true

  @Output() sendEvent = new EventEmitter<any>()

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    setTimeout(() => {
      this.form = this.fb.group({});
      this.formFields.forEach(el => {
        this.form.addControl(el.field, new FormControl(''));
      });
    }, 100)

  }

  viewForm() {
    console.log(this.form);
  }

  sendObject() {
    this.sendEvent.emit(this.form.value)
    console.log(this.form.value);
  }

}
