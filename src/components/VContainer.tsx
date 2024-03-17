import { useEffect } from "react";
import { useVContext } from "../hooks/useVContext"
import { VStorie } from "./VStorie";
import { getStorieInfo } from "../helpers/getStorieInfo";
import { Storie } from "../types/Storie";

interface VContainerProps {
  stories: (string | Storie)[]
}

export function VContainer({ stories }: VContainerProps) {
  const { setStories } = useVContext();
  useEffect(() => {
    setStories(formatStories(stories))
  }, [stories])

  return(
    <div>
      <VStorie />
    </div>
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