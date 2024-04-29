import { useVContext } from "../hooks/useVContext";
import { VStorie } from "./VStorie";

export function VContainer() {
  const { width, height } = useVContext()

  return(
    <div style={{
      ...styles.vStories,
      maxWidth: width,
      maxHeight: height,
    }}>
      <VStorie />
    </div>
  )
}

const styles = {
  vStories: {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "#111",
    borderRadius: "8px",
    overflow: "hidden"
  } as React.CSSProperties
} 