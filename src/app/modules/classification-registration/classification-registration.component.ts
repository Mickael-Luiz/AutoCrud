import { Component } from '@angular/core';
import { IClassification } from 'src/app/interface/IClassification';
import { IFormField } from 'src/app/interface/IFormField';

@Component({
  selector: 'app-classification-registration',
  templateUrl: './classification-registration.component.html',
  styleUrls: ['./classification-registration.component.scss']
})
export class ClassificationRegistrationComponent {

  operationTitle = 'Novo Registro de Classificação'
  visible: boolean = false
  dataClone: IClassification[] = []

  formFields: IFormField[] = [
    { label: 'Codigo do Produto:', field: 'code' },
    { label: 'Descrição:', field: 'desc' },
    { label: 'Tipo:', field: 'type' }
  ]

  data: IClassification[] = [
    {
      code: '1', description: 'Produto', type: 'alimento', children: [
        {
          code: '1.1', description: 'Produto', type: 'alimento', children: [
            {
              code: '1.1.1', description: 'Produto', type: 'alimento', children: [
                { code: '1.1.1.1', description: 'Produto', type: 'alimento' }
              ]
            }
          ]
        },
        { code: '1.2', description: 'Produto', type: 'alimento' },
        { code: '1.3', description: 'Produto', type: 'alimento' },
      ]
    },
    {
      code: '2', description: 'Produto', type: 'bebida', children: [
        { code: '2.1', description: 'Produto', type: 'bebida' },
        { code: '2.2', description: 'Produto', type: 'bebida' },
        { code: '2.3', description: 'Produto', type: 'bebida' },
      ]
    }
  ];

  constructor() {
    this.createDataClone()
  }

  createDataClone() {
    this.dataClone = this.data
    this.dataClone.forEach(el => el.hasParent = false)
    const loop = (item: IClassification[]) => {
      item.forEach(el => {
        el.hasParent = el.hasParent == false ? false : true
        el.visibilityChildren = false
        if (el.children) {
          loop(el.children)
        }
      })
    }
    loop(this.dataClone)
  }

  showDialog() {
    this.visible = true;
  }

}
