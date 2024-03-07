import { ISelecItem } from './ISelectItem'

export interface IFormField {
  label: string,
  field: string,
  col?: string
  type?: 'inputtext' | 'dropdown' | 'multiselect' | 'inputtextarea' | 'inputmask' | 'inputswitch' | 'inputnumber' | 'password' | 'calendar',
  values?: any
}
