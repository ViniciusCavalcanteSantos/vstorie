import { useVContext } from "../hooks/useVContext"
import { VStorie } from "./VStorie";

export function VContainer() {
  const { stories, currentStorie} = useVContext();
  const storie = stories[currentStorie];

  return(
    <div>
      <VStorie storie={storie} />
    </div>
  )
}