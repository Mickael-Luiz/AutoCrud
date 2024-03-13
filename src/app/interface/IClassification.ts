export interface IClassification {
  code: string
  description: string
  type: string
  visibilityChildren?: boolean;
  children?: IClassification[]
  hasParent?: boolean
}
