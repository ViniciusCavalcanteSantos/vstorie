import { Storie } from "../types/Storie"
import { useState, createContext } from "react";

export interface VProgressContextType {
  isPaused: boolean,
  timeElapsed: number,
  setIspaused: Function,
  setTimeElapsed: Function,
}

export const VProgressContext = createContext<VProgressContextType>({
  isPaused: false,
  timeElapsed: 0,
  setIspaused: (value: boolean) => {return value},
  setTimeElapsed: (value: number) => {return value},
  
})

export function VProgressContextProvider({ children }: { children: React.ReactNode}) {
  const [isPaused, setIspaused] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  return(
    <VProgressContext.Provider value={{isPaused, setIspaused, timeElapsed, setTimeElapsed}}>
      {children}
    </VProgressContext.Provider>
  )
}