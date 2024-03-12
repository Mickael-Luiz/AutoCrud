export interface IClassification {
  code: string
  description: string
  children?: IClassification[]
  visibilityChildren?: boolean;
}
