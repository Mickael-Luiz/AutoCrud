import { Component, Input } from '@angular/core';

interface IMenuOptions {
  area: string,
  options: IOptions[]
}

interface IOptions {
  label: string,
  icon: string,
  path: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() menuInactivate: boolean = true

  menuOptions: IMenuOptions[] = [
    {
      area: 'APLICAÇÃO', options: [
        {label: 'Painel de Controle', icon: '', path:''},
        {label: 'Compras', icon: '', path:''},
        {label: 'Suprimentos', icon: '', path:''},
        {label: 'Cadastro de Banco', icon: '', path:''},
        {label: 'Cadastro de Agência', icon: '', path:''},
        {label: 'Cadastro de Conta Corrente', icon: '', path:''},
        {label: 'Cadastro de Centro de Custo', icon: '', path:''}
      ]
    },
    {
      area: 'ADMINISTRAÇÃO', options: [
        {label: 'Log', icon: '', path:''},
        {label: 'Financeiro', icon: '', path:''},
        {label: 'Contábil', icon: '', path:''},
        {label: 'Tipo de Conta a Receber e Classificação Financeira', icon: '', path:''},
        {label: 'Cadastro de Tipo de Operação a Receber', icon: '', path:''},
        {label: 'Cadastro de Ajuste de Titulo a Receber', icon: '', path:''},
        {label: 'Inclusão de Título a Receber com Ajuste', icon: '', path:''},
        {label: 'Cadastro de Motivo de Cancelamento', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''},
        {label: 'Movimentação em Conta Corrente', icon: '', path:''}
      ]
    }
  ]

}
