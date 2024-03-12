import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @Input() data: any[] = []

  visible: boolean = false
  visibilityChildren: boolean = false

  showDialog() {
    this.visible = true;
  }

}
