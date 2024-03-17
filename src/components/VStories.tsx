import { VContextProvider } from "../context/VContext"
import { VContainer } from "./VContainer"
import { Storie } from "../types/Storie"

interface VStoriesProps {
  stories: (string | Storie)[]
}

export function VStories({ stories }: VStoriesProps) {
  return(
    <VContextProvider>
      <VContainer stories={stories}/>
    </VContextProvider>
  )
}

