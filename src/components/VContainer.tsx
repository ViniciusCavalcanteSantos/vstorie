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
    width: "100%",
    height: "100%"
  }
}