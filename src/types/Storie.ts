export type Storie = {
  url: string,
  type?: string,
  header?: React.ComponentType<any>,
  footer?: React.ComponentType<any>,
  content?: React.ComponentType<any>
}