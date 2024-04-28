import { useState, createContext } from "react";
import { useVContext } from "../hooks/useVContext";

export interface VProgressContextType {
  isPaused: boolean,
  isLoading: boolean,
  timeElapsed: number,
  duration: number,
  setIspaused: Function,
  setIsLoading: Function,
  setTimeElapsed: Function,
  setDuration: Function
}

export const VProgressContext = createContext<VProgressContextType>({
  isPaused: false,
  isLoading: false,
  timeElapsed: 0,
  duration: 0,
  setIspaused: (value: boolean) => {return value},
  setIsLoading: (value: boolean) => {return value},
  setTimeElapsed: (value: number) => {return value},
  setDuration: (value: number) => {return value},
})

export function VProgressContextProvider({ children }: { children: React.ReactNode}) {
  const {duration: durationDefault} = useVContext();

  const [isPaused, setIspaused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [duration, setDuration] = useState(durationDefault)

  return(
    <VProgressContext.Provider value={{isPaused, setIspaused, isLoading, setIsLoading, timeElapsed, setTimeElapsed, duration, setDuration}}>
      {children}
    </VProgressContext.Provider>
  )
}