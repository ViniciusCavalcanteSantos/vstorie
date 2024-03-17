import { VStoriesContextProvider } from "../context/VStoriesContext"
import { VContainer } from "./VContainer"
import { StorieUnformatted } from "../types/StorieUnformatted"
import { VContextProvider } from "../context/VContext"
import { Config } from "../types/Config"
import { getStorieInfo } from "../helpers/getStorieInfo";
import { Storie } from "../types/Storie";

interface VStoriesProps extends Config {
  stories: StorieUnformatted
}

export function VStories(props: VStoriesProps) {
  const { stories, ...config } = props;

  return(
    <VContextProvider config={config}>
      <VStoriesContextProvider stories={formatStories(stories)}>
        <VContainer />
      </VStoriesContextProvider>
    </VContextProvider>
  )
}


function formatStories(stories: StorieUnformatted): Storie[] {
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