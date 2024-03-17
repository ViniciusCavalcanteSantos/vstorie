import { useContext } from "react";
import { VContext, VContextType } from "../context/VContext";

export function useVContext(): VContextType {
  return useContext(VContext);
}