import VContent from "./VContent";
import VTimerContainer from "./timer/VTimerContainer";
import VControllers from "./VControllers";
import VHeader from "./VHeader";
import VLoader from "./VLoader";
import VFooter from "./VFooter";

export function VStorie() {
 

  return(
    <>
      <VTimerContainer />

      <VControllers />

      <VHeader />

      <VContent />

      <VFooter />

      <VLoader />
    </>
  )
}
