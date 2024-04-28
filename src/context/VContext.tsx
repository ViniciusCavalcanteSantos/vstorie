import { createContext } from "react";
import { Config } from "../types/Config";
import { LoadingIcon } from "../components/icons/LoadingIcon";

export interface VContextType {
  width: string,
  height: string,
  loader: JSX.Element,
  duration: number,
  loop: boolean,
  isPaused: boolean,
  onAllStoriesBack: Function,
  onAllStoriesNext: Function,
  onNext: Function
  onPrev: Function
}

export const VContext = createContext<VContextType>({
  width: "360px",
  height: "600px",
  loader: <LoadingIcon color={"#fff"} />,
  duration: 3000,
  loop: false,
  isPaused: false,
  onAllStoriesBack: () => {},
  onAllStoriesNext: () => {},
  onNext: () => {},
  onPrev: () => {}
})

export function VContextProvider({ config, children }: { config: Config, children: React.ReactNode }) {
  const defaultValue: VContextType = {
    width: config?.width ?? "360px",
    height: config?.height ?? "600px",
    loader: config?.loader ?? <LoadingIcon color={"#fff"} />,
    duration: config?.duration ?? 3000,
    loop: config?.loop ?? false,
    isPaused: config?.isPaused ?? false,
    onAllStoriesBack: config?.onAllStoriesBack ?? (() => {}),
    onAllStoriesNext: config?.onAllStoriesNext ?? (() => {}),
    onNext: config?.onNext ?? (() => {}),
    onPrev: config?.onPrev ?? (() => {})
  };

  return(
    <VContext.Provider value={defaultValue}>
      {children}
    </VContext.Provider>
  )
}