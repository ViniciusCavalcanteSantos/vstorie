import { useEffect, useRef, useState } from "react";
import { useVContext } from "../../hooks/useVContext";
import { useVStoriesContext } from "../../hooks/useVStoriesContext";
import { VTimer } from "./VTimer";

export function VTimerContainer() {
  const requestRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [ timeElapsed, setTimeElapsed ] = useState(0);
  const { duration, loop, onAllStoriesNext } = useVContext();
  const { stories, currentStorie, setCurrentStorie } = useVStoriesContext();
  const storiesLength = stories.length;

  const animate = (timestamp: number) => {
    if(!lastTimeRef.current) {
      lastTimeRef.current = timestamp;
    }

    let progress = timestamp - lastTimeRef.current;
    if(progress >= duration) {
      if((storiesLength - 1) > currentStorie) {
        lastTimeRef.current = timestamp;
        progress = 0;
        setCurrentStorie((prev: number) => prev + 1)
      }

      if((storiesLength - 1) === currentStorie) {
        if(loop) setCurrentStorie(0)
        if(!loop && onAllStoriesNext) onAllStoriesNext();
      }
    }

    if(progress < duration) {
      requestRef.current = requestAnimationFrame(animate);
    }
    
    setTimeElapsed(() => progress > duration ? duration : progress)
  };


  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current)
  }, [currentStorie, duration])

  const timers = stories.map((_, index) => {
    let progress = timeElapsed / duration;
    if(index < currentStorie) {progress = 1}
    if(index > currentStorie) {progress = 0}

    return(
      <VTimer key={index} progress={progress} />
    )
  })

  return(
    <div className="VTimer" style={{...styles.progressContainer}}>
      {timers}
    </div>
  )
}

const styles = {
  progressContainer: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridAutoColumns: "1fr",
    gridAutoFlow: "column",
    gap: "4px",
    width: "98%",
    height: "4px",
    paddingTop: "7px",
    boxSizing: "content-box"
  } as React.CSSProperties
}