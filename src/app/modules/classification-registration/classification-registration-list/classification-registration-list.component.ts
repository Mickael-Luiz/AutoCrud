import { Component } from '@angular/core';
import { IClassification } from 'src/app/interface/IClassification';

@Component({
  selector: 'app-classification-registration-list',
  templateUrl: './classification-registration-list.component.html',
  styleUrls: ['./classification-registration-list.component.scss']
})
export class ClassificationRegistrationListComponent {

  visible: boolean = false
  dataClone: IClassification[] = []

  data: IClassification[] = [
    { code: '55', description: 'Produto 1', children: [
      {code: '55-1', description: 'Produto 1.1', children: [
        {code: '55-1-1', description: 'Produto 1.1.1', children: [
          {code: '55-1-1-1', description: 'Produto 1.1.1.1'}
        ]}
      ]},
      {code: '55-2', description: 'Produto 1.2'},
      {code: '55-3', description: 'Produto 1.3'},
    ]},
    { code: '66', description: 'Produto 2', children: [
      {code: '66-1', description: 'Produto 2.1'},
      {code: '66-2', description: 'Produto 2.2'},
      {code: '66-3', description: 'Produto 2.3'},
    ]}
  ];

  constructor() {
    this.createDataClone()
  }

  createDataClone() {
    this.dataClone = this.data
    this.dataClone.forEach(el => {
      el.visibilityChildren = false
      if (el.children) {
        el.children.forEach(ch => ch.visibilityChildren = false)
      }
    })
  }

  showDialog() {
    this.visible = true;
  }

}
