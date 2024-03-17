import { useEffect, useState } from "react";
import { useVContext } from "../../hooks/useVContext";
import { useVStoriesContext } from "../../hooks/useVStoriesContext";
import { VTimer } from "./VTimer";

export function VTimerContainer() {
  const [ timeElapsed, setTimeElapsed ] = useState(0);
  const { duration } = useVContext();
  const { stories, currentStorie } = useVStoriesContext();
  const storiesLength = stories.length;

  useEffect(() => {
    const interval = setInterval(() => {
        // if(isPaused || isLoading) return;

        setTimeElapsed(prevTime => {
          const newTime = prevTime + 50;
          return newTime > duration ? duration : newTime;
        })
      }, 50)
''
    return () => clearInterval(interval)
  }, [duration])

  const timers = stories.map((_, index) => {
    let progress = timeElapsed / duration;
    if(index < currentStorie) {progress = 1}
    if(index > currentStorie) {progress = 0}

    const width = 100 / storiesLength;

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
    display: "grid",
    gridAutoColumns: "1fr",
    gridAutoFlow: "column",
    gap: "4px",
    width: "100%",
    height: "4px"
  }
}