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
  formVisible: boolean = false


  //FORMS OBJECTS

  formFieldsLancamento: IFormField[] = [
    { label: 'Descrição:', field: 'desc', col: 'col-12 col-md-8 col-lg-6' },
    { label: 'Valor:', field: 'value', col: 'col-12 col-md-4 col-lg-2' },
    {
      label: 'Tipo:', field: 'type', type: 'dropdown', values: [
        { name: 'Receita', code: 'R' },
        { name: 'Despesa', code: 'D' }
      ]
    },
    { label: 'Data de Lançamento:', field: 'dateLanc', type: 'calendar', values: '99/99/9999', col: 'col-12 col-md-4 col-lg-3' },
    {
      label: 'Devedor/Credor:', field: 'DorC', type: 'dropdownFilter', values: [
        { name: 'USER1', code: '1' },
        { name: 'USER2', code: '2' }
      ]
    },
    { label: 'Centro de Custos:', field: 'CC' }
  ]

  formFieldsPayments: IFormField[] = [
    {
      label: 'Forma:', field: 'form', type: 'dropdownFilter', values: [
        { name: '', code: null },
        { name: 'Crédito', code: 'credito' },
        { name: 'Débito', code: 'debito' },
        { name: 'Pix', code: 'pix' },
        { name: 'Dinheiro', code: 'moeda' }
      ]
    },
    { label: 'Valor:', field: 'value', col: 'col-12 col-md-4 col-lg-4' },
    { label: 'Data de Lançamento:', field: 'dateRel', type: 'calendar', values: '99/99/9999', col: 'col-12 col-md-6 col-lg-4' },
    { label: 'Data de Pagamento:', field: 'datePay', type: 'calendar', values: '99/99/9999', col: 'col-12 col-md-6 col-lg-4' },
    { label: 'Nº do documento:', field: 'nDoc', col: 'col-12 col-md-8 col-lg-4' },
    { label: 'Nº de Parcelas:', field: 'nParc', col: 'col-12 col-md-8 col-lg-4' },
  ]

  formFieldsDetails: IFormField[] = [
    { label: 'Descrição:', field: 'desc', col: 'col-12 col-md-8 col-lg-6' },
    { label: 'Valor:', field: 'value', col: 'col-12 col-md-4 col-lg-2' },
    {
      label: 'Classificação:', field: 'type', type: 'dropdown', values: [
        { name: 'Receita', code: 'R' },
        { name: 'Despesa', code: 'D' }
      ]
    }
  ]


  // TABLES OBJECTS

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

  tablePayments: ITableField[] = [
    { header: 'Forma', field: 'form', object: true, fieldObject: 'name' },
    { header: 'Valor', field: 'value' },
    { header: 'Data Lançamento', field: 'dateRel' },
    { header: 'Data Pagamento', field: 'datePay' },
    { header: 'Nº do documento', field: 'nDoc' },
    { header: 'Nº de Parcelas', field: 'nParc' }
  ]

  tableDetails: ITableField[] = [
    { header: 'Descrição', field: 'desc' },
    { header: 'Valor', field: 'value' },
    { header: 'Classificação', field: 'type', object: true, fieldObject: 'name' },
  ]


  //TABLES DATES

  data = [
    { codigo: '000000', descricao: 'IMPOSTOS FEDERAIS', contaContabil: '1.01.01.01.001', clasFinanci: 'IMPOSTOS', descDoc: 'IMPOSTOS FEDERAIS', tipoConta: 'NORMAL', contaLancamento: 'SIM', contaTipoContaBaixa: 'NAO', historicoInteg: 'DOC N° [DOC] [RSC]', utiLancManual: 'SIM', tratVencDiaNaoUtil: 'PRORROGAR', dataVencimento: '05/09/2024', valor: 'R$ 500,00' },

    { codigo: '111111', descricao: 'IMPOSTOS FEDERAIS', contaContabil: '2.02.02.02.002', clasFinanci: 'IMPOSTOS', descDoc: 'IMPOSTOS FEDERAIS', tipoConta: 'NORMAL', contaLancamento: 'SIM', contaTipoContaBaixa: 'NAO', historicoInt: 'DOC N° [DOC] [RSC]', utiLancManual: 'SIM', tratVencDiaNaoUtil: 'PRORROGAR', dataVencimento: '05/09/2024', valor: 'R$ 500,00' },

    { codigo: '222222', descricao: 'IMPOSTOS FEDERAIS', contaContabil: '3.03.03.03.003', clasFinanci: 'IMPOSTOS', descDoc: 'IMPOSTOS FEDERAIS', tipoConta: 'NORMAL', contaLancamento: 'SIM', contaTipoContaBaixa: 'NAO', historicoInt: 'DOC N° [DOC] [RSC]', utiLancManual: 'SIM', tratVencDiaNaoUtil: 'PRORROGAR', dataVencimento: '05/09/2024', valor: 'R$ 500,00' }
  ]

  dataPayment: {}[] = []

  dataDetails: {}[] = []

  addPayment(payment: any) {
    this.dataPayment.push(payment)
  }

  addDetail(detail: any) {
    this.dataDetails.push(detail)
  }

  showDialog() {
    this.formVisible = true
  }

}
