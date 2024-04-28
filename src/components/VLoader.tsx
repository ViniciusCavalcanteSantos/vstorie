import { CSSProperties } from "react";
import { LoadingIcon } from "./icons/LoadingIcon";
import { useVProgressContext } from "../hooks/useVProgressContext";

export default function VLoader() {
  const { isLoading } = useVProgressContext();
  
  return(
    <>
      {isLoading && 
        <div style={styles.loadingContainer}>
          <LoadingIcon />
        </div>
      }
    </>
  )
}

const styles = {
  loadingContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  } as CSSProperties
}