import VContent from "./VContent";
import { VTimerContainer } from "./timer/VTimerContainer";
import { VControllers } from "./VControllers";
import VLoader from "./VLoader";

export function VStorie() {
 

  return(
    <>
      <VTimerContainer />

      <VControllers />

      <VContent />

      <VLoader />
    </>
  )
}
