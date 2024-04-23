import { IButtonTable } from './IButtonsColumn';

export interface ITableField {
  header: string,
  field: string,
  align?: string,
  buttons?: IButtonTable[],
  object?: boolean,
  fieldObject?: string
}
