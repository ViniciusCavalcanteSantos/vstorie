import { useRef } from "react";
import { useVContext } from "../hooks/useVContext";
import { useVProgressContext } from "../hooks/useVProgressContext";
import { useVStoriesContext } from "../hooks/useVStoriesContext"

enum Actions {
  BACK,
  NEXT
}

export function VControllers() {
  const mouseEventHandler = useRef(0);
  const { isPaused: isPausedDefault, onAllStoriesBack, onAllStoriesNext, loop } = useVContext();
  const { stories, currentStorie, setCurrentStorie } = useVStoriesContext();
  const { isPaused, setIsPaused, setTimeElapsed } = useVProgressContext();

  const handleMouseDown = () => {
    mouseEventHandler.current = setTimeout(() => {
      setIsPaused(true)
    }, 300)
  }

  const handleMouseUp = (action: Actions) => {
    mouseEventHandler.current && clearTimeout(mouseEventHandler.current);
    if(isPaused && !isPausedDefault) {
      return setIsPaused(false);
    }

    if(action === Actions.BACK) {
      if(currentStorie > 0 ) {
        setTimeElapsed(0);
        setCurrentStorie((prev: number) => prev - 1)
      }

      if(currentStorie === 0 ) {
        onAllStoriesBack();
      }
    }

    if(action === Actions.NEXT) {
      if(currentStorie < (stories.length - 1)) {
        setTimeElapsed(0);
        setCurrentStorie((prev: number) => prev + 1)
      }

      if(currentStorie === (stories.length - 1)) {
        if(loop) {
          setTimeElapsed(0);
          setCurrentStorie(0)
        }
        if(!loop) onAllStoriesNext()
      }
    }
  }

  return(
    <div style={{...styles.controllersContainer}}>
      <button style={{...styles.controllers}} type="button" onMouseDown={handleMouseDown} onMouseUp={() => handleMouseUp(Actions.BACK)}>go back</button>
      <button style={{...styles.controllers}} type="button" onMouseDown={handleMouseDown} onMouseUp={() => handleMouseUp(Actions.NEXT)}>go next</button>
    </div>
  )
}

const styles = {
  controllersContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    opacity: "0"
  } as React.CSSProperties,
  controllers: {
    width: "50%",
    height: "100%",
    border: "none",
    outline: "none"
  } as React.CSSProperties
} 