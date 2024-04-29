import { useEffect, useRef } from "react";
import { useVStoriesContext } from "../hooks/useVStoriesContext";
import { Storie } from "../types/Storie";
import { useVProgressContext } from "../hooks/useVProgressContext";

export default function VContent() {
  const vStoriesContext = useVStoriesContext();
  const vProgressContext = useVProgressContext();
  const current = vStoriesContext.stories[vStoriesContext.currentStorie];

  const Content = current.content ?? DefaultContent;  
  return(
    <Content storie={current} {...vStoriesContext} {...vProgressContext}/>
  )
}

interface DefaultContentProps {
  storie: Storie,
  isPaused: boolean,
  isLoading: boolean,
  duration: number,
  setIsPaused: Function,
  setIsLoading: Function,
  setDuration: Function,
  [key: string]: any
}

export function DefaultContent({ storie, isPaused, setIsLoading, setDuration }: DefaultContentProps) {
  const videoRef = useRef<HTMLVideoElement|null>(null);

  useEffect(() => {
    const video = videoRef?.current;
    if(video) {
      video.addEventListener("loadeddata", (e: any) => {
        setDuration(e.target.duration * 1000)
        setIsLoading(false);
      })

      if(isPaused) {
        video.pause();
      }

      if(!isPaused) {
        video.play();
      }
    }
  }, [storie, isPaused])


  const handleImageLoad = () => {
    setIsLoading(false);
  }

  return(
    <div className="VContent" style={styles.vContent}>
      {storie.type === "video" ?
        <video src={storie.url} style={styles.media} ref={videoRef}/>
        :
        <img src={storie.url} style={styles.media} onLoad={handleImageLoad}/>
      }
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  vContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  media: {
    height: "auto",
    width: "100%",
    objectFit: "cover"
  }
}