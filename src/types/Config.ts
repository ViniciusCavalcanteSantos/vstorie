export type Config = {
  width?: string,
  height?: string,
  loader?: React.ComponentType<any>,
  duration?: number,
  loop?: boolean,
  isPaused?: boolean,
  onAllStoriesBack?: Function,
  onAllStoriesNext?: Function,
  onNext?: Function
  onPrev?: Function
} 