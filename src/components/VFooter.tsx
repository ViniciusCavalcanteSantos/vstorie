import { useVProgressContext } from "../hooks/useVProgressContext";
import { useVStoriesContext } from "../hooks/useVStoriesContext";

export default function VFooter() {
  const vStoriesContext = useVStoriesContext();
  const vProgressContext = useVProgressContext();
  const current = vStoriesContext.storie;

  const Footer = current.footer ?? DefaultFooter;  

  return(
    <Footer {...vStoriesContext} {...vProgressContext} />
  )
}

export function DefaultFooter() {
  return(
    <></>
  )
}