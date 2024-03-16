export type Storie = {
  url: string,
  type?: string,
  isPaused?: boolean,
  header?: React.ComponentType<any>,
  loader?: React.ComponentType<any>,
  footer?: React.ComponentType<any>
}