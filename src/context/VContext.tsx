import { createContext } from "react";
import { Config } from "../types/Config";
import { VLoader } from "../components/icons/VLoader";

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
  width: "300px",
  height: "600px",
  loader: <VLoader color={"#fff"} />,
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
    width: config?.width ?? "300px",
    height: config?.height ?? "600px",
    loader: config?.loader ?? <VLoader color={"#fff"} />,
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