import { useEffect, useRef } from "react";
import { useVContext } from "../../hooks/useVContext";
import { useVStoriesContext } from "../../hooks/useVStoriesContext";
import { VTimer } from "./VTimer";
import { useVProgressContext } from "../../hooks/useVProgressContext";

export function VTimerContainer() {
  const requestRef = useRef(0);
  const lastTimeRef = useRef(0);
  const { duration: defaultDuration, loop, onAllStoriesNext } = useVContext();
  const { stories, currentStorie, setCurrentStorie } = useVStoriesContext();
  const { timeElapsed, setTimeElapsed, isPaused, isLoading, setIsLoading, duration, setDuration} = useVProgressContext();
  const storiesLength = stories.length;

  const animate = (timestamp: number) => {
    // Retoma o contador com o tempo de pausa se houver
    if(!lastTimeRef.current) {
      lastTimeRef.current = timestamp - timeElapsed;
    }

    let progress = timestamp - lastTimeRef.current;
    // Se o progresso passar a duração máxima passa para o próximo
    if(progress >= duration) {
      if((storiesLength - 1) > currentStorie) {
        lastTimeRef.current = timestamp;
        progress = 0;
        setCurrentStorie((prev: number) => prev + 1)
      }

      if((storiesLength - 1) === currentStorie) {
        if(loop) setCurrentStorie(0);
        if(!loop && onAllStoriesNext) onAllStoriesNext();
      }
    }

    // Se o progresso não passar a duração máxima chama mais uma animação
    if(progress < duration) {
      requestRef.current = requestAnimationFrame(animate);
    }
    
    setTimeElapsed(() => progress > duration ? duration : progress)
  };


  useEffect(() => {
    // Quando pausado para o contador
    if(isPaused || isLoading) {
      lastTimeRef.current = 0; 
      requestRef.current && cancelAnimationFrame(requestRef.current);
      return;
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current)
  }, [lastTimeRef.current, currentStorie, duration, isPaused, isLoading, timeElapsed])

  useEffect(() => {
    lastTimeRef.current = 0;
    setTimeElapsed(0)
    setDuration(defaultDuration)
    setIsLoading(true)
  }, [currentStorie])

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