
export function VTimer({ progress }: { progress: number }) {
  
  return(
    <div className="VTimer" style={{
      ...styles.vTimer,
      transform: `scaleX(${progress})`
    }}>
    </div>
  )
}

const styles = {
  vTimer: {
    width: "100%",
    background: "#fff",
    transformOrigin: "left",
    transition: "transform 50ms"
  }
}

