import { useEffect } from "react"
import { VContextProvider } from "../context/VContext"
import { VContainer } from "./VContainer"
import { useVContext } from "../hooks/useVContext"
import { Storie } from "../types/Storie"
import { getStorieInfo } from "../helpers/getStorieInfo"

interface VStoriesProps {
  stories: (string | Storie)[]
}

export function VStories({ stories }: VStoriesProps) {
  const { setStories } = useVContext();
  useEffect(() => {
    setStories(formatStories(stories))
  }, [stories])

  return(
    <VContextProvider>
      <VContainer />
    </VContextProvider>
  )
}

function formatStories(stories: (string | Storie)[]): Storie[] {
  return stories.map(s => {

    if(typeof s === "string") {
      return getStorieInfo(s);
    }

    if(typeof s === "object") {
      if(!s.type) {
        s.type = getStorieInfo(s.url).type;
      }
    }

    return s;
  })
}