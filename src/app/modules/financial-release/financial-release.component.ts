import { Component } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { ITableField } from 'src/app/interface/ITableFields';

@Component({
  selector: 'app-financial-release',
  templateUrl: './financial-release.component.html',
  styleUrls: ['./financial-release.component.scss']
})
export class FinancialReleaseComponent {

  operationTitle: string = 'Lançamento Financeiro'

  tableFields: ITableField[] = [
    { header: 'Código', field: 'codigo' },
    { header: 'Descrição', field: 'descricao' },
    { header: 'Descrição Documento', field: 'descDoc' },
    { header: 'Contabiliza por Tipo de Conta na Baixa', field: 'contaTipoContaBaixa', align: 'center' },
    { header: 'Data Vencimento', field: 'dataVencimento', align: 'center' },
    { header: 'Valor', field: 'valor', align: 'center' },
    {
      header: 'Ações', field: 'actions', align: 'center',
      buttons: [
        { tooltip: 'Visualizar', icon: 'pi pi-eye', severity: 'secondary' },
        { tooltip: 'Editar', icon: 'pi pi-pencil' },
        { tooltip: 'Deletar', icon: 'pi pi-trash', severity: 'danger' }
      ]
    }
  ]

  data = [
    { codigo: '000000', descricao: 'IMPOSTOS FEDERAIS', contaContabil: '1.01.01.01.001', clasFinanci: 'IMPOSTOS', descDoc: 'IMPOSTOS FEDERAIS', tipoConta: 'NORMAL', contaLancamento: 'SIM', contaTipoContaBaixa: 'NAO', historicoInteg: 'DOC N° [DOC] [RSC]', utiLancManual: 'SIM', tratVencDiaNaoUtil: 'PRORROGAR', dataVencimento: '05/09/2024', valor: 'R$ 500,00' },

    { codigo: '111111', descricao: 'IMPOSTOS FEDERAIS', contaContabil: '2.02.02.02.002', clasFinanci: 'IMPOSTOS', descDoc: 'IMPOSTOS FEDERAIS', tipoConta: 'NORMAL', contaLancamento: 'SIM', contaTipoContaBaixa: 'NAO', historicoInt: 'DOC N° [DOC] [RSC]', utiLancManual: 'SIM', tratVencDiaNaoUtil: 'PRORROGAR', dataVencimento: '05/09/2024', valor: 'R$ 500,00' },

    { codigo: '222222', descricao: 'IMPOSTOS FEDERAIS', contaContabil: '3.03.03.03.003', clasFinanci: 'IMPOSTOS', descDoc: 'IMPOSTOS FEDERAIS', tipoConta: 'NORMAL', contaLancamento: 'SIM', contaTipoContaBaixa: 'NAO', historicoInt: 'DOC N° [DOC] [RSC]', utiLancManual: 'SIM', tratVencDiaNaoUtil: 'PRORROGAR', dataVencimento: '05/09/2024', valor: 'R$ 500,00' }
  ]

  formFields: IFormField[] = [
    { label: 'Código', field: 'codigo' },
    { label: 'Descrição', field: 'desc', col: 'col-12 col-md-6 col-lg-8' },
    { label: 'Conta Contábil', field: 'desc' },
    { label: 'Classificação Financeira', field: 'desc' },
    { label: 'Tipo de Conta', field: 'desc' },
    { label: 'Conta Lançamento', field: 'desc' },
    {
      label: 'Contabiliza por Tipo de Conta na Baixa', field: 'desc', type: 'dropdown',
      values: [
        { name: 'Sim', code: 'SIM' },
        { name: 'Não', code: 'NAO' }
      ]
    },
    { label: 'Historico Integração', field: 'desc' },
    { label: 'Utiliza em Lançamento Manual', field: 'desc' },
    { label: 'Data Vencimento', field: 'desc', type: 'calendar', values: '99/99/9999' },
    {
      label: 'Tratamento Vencimento em Dia Não Útil', field: 'desc', type: 'dropdown',
      values: [
        {name: 'Prorrogar', code: 'pror'},
        {name: 'Considerar', code: 'cons'}
      ]
    },
    { label: 'Valor', field: 'desc' },
    { label: 'Descrição Documento', field: 'desc', type: 'inputtextarea' },
  ]

  filterFields: IFormField[] = [
    { label: 'Código', field: 'codigo' },
    { label: 'Descrição', field: 'desc' },
    { label: 'Descrição Documento', field: 'desc' },
    { label: 'Data Vencimento', field: 'desc', type: 'calendar' },
    { label: 'Valor', field: 'desc' },
  ]

}
