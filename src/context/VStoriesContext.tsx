import { Storie } from "../types/Storie"
import { useState, createContext } from "react";

export interface VStoriesContextType {
  storie: Storie,
  stories: Storie[],
  currentStorie: number,
  setStories: Function,
  setCurrentStorie: Function
}

export const VStoriesContext = createContext<VStoriesContextType>({
  storie: {url: ""},
  stories: [],
  currentStorie: 0,
  setStories: (value: Storie[]) => {return value},
  setCurrentStorie: (value: number) => {return value}
})

export function VStoriesContextProvider({ stories: storiesInitial, children }: { stories: Storie[], children: React.ReactNode}) {
  const [stories, setStories] = useState<Storie[]>(storiesInitial);
  const [currentStorie, setCurrentStorie] = useState<number>(0);
  const storie = stories[currentStorie];

  return(
    <VStoriesContext.Provider value={{storie, stories, setStories,currentStorie, setCurrentStorie}}>
      {children}
    </VStoriesContext.Provider>
  )
}