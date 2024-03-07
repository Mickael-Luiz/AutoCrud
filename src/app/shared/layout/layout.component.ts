import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  menuInactivate: boolean = true
  backgroundLock: boolean = false

  constructor() { }

  handleMenuState(menuState: boolean) {
    this.menuInactivate = menuState
    this.backgroundLock = !this.backgroundLock
  }

}
