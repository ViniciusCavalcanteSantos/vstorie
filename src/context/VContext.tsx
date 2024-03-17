import { Storie } from "../types/Storie"
import { useState, createContext } from "react";

export interface VContextType {
  stories: Storie[],
  currentStorie: number,
  setStories: (value: Storie[]) => void,
  setCurrentStorie: (value: number) => void
}

export const VContext = createContext<VContextType>({
  stories: [],
  currentStorie: 0,
  setStories: (value: Storie[]) => {return value},
  setCurrentStorie: (value: number) => {return value}
})

export function VContextProvider({ children }: { children: React.ReactNode}) {
  const [stories, setStories] = useState<Storie[]>([]);
  const [currentStorie, setCurrentStorie] = useState<number>(0);

  return(
    <VContext.Provider value={{stories, setStories,currentStorie, setCurrentStorie}}>
      {children}
    </VContext.Provider>
  )
}