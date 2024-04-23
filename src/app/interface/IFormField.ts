export interface IFormField {
  label: string,
  field: string,
  col?: string
  type?: 'inputtext' | 'dropdown' | 'dropdownFilter' | 'multiselect' | 'inputtextarea' | 'inputmask' | 'inputswitch' | 'inputnumber' | 'password' | 'calendar' | 'radiobutton',
  values?: any,
  groupname?: string
}
