import { Component, Input } from '@angular/core';
import { IClassification } from 'src/app/interface/IClassification';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @Input() data: IClassification[] = []

  verifyParente(obj: IClassification): boolean {
    return !!obj.hasParent
  }

}
