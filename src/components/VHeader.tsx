import { useVProgressContext } from "../hooks/useVProgressContext";
import { useVStoriesContext } from "../hooks/useVStoriesContext";

export default function VHeader() {
  const vStoriesContext = useVStoriesContext();
  const vProgressContext = useVProgressContext();
  const current = vStoriesContext.storie;

  const Header = current.header ?? DefaultHeader;  

  return(
    <Header {...vStoriesContext} {...vProgressContext} />
  )
}

export function DefaultHeader() {
  return(
    <></>
  )
}