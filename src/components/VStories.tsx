import { VContextProvider } from "../context/VContext"
import { VContainer } from "./VContainer"
import { StorieUnformatted } from "../types/StorieUnformatted"

interface VStoriesProps {
  stories: StorieUnformatted
}

export function VStories({ stories }: VStoriesProps) {
  return(
    <VContextProvider>
      <VContainer stories={stories}/>
    </VContextProvider>
  )
}

