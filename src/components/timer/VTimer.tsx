
export function VTimer({ progress }: { progress: number }) {
  
  return(
    <div className="VTimer" style={styles.vTimerBackground}>
      <div style={{
        ...styles.vTimer,
        transform: `scaleX(${progress})`
      }}>
      </div>
    </div>
  )
}

const styles = {
  vTimerBackground: {
    width: "100%",
    background: "rgba(255, 255, 255, .35)",
    transformOrigin: "left",
    borderRadius: "2px",
    overflow: "hidden"
  },
  vTimer: {
    height: "100%",
    width: "100%",
    background: "#fff",
    transformOrigin: "left",
  },
}

