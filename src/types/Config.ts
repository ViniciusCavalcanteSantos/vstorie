export type Config = {
  width?: string,
  height?: string,
  loader?: JSX.Element,
  duration?: number,
  loop?: boolean,
  isPaused?: boolean,
  onAllStoriesBack?: Function,
  onAllStoriesNext?: Function,
  onNext?: Function
  onPrev?: Function
} 