import { useContext } from "react";
import { VProgressContext, VProgressContextType } from "../context/VProgressContext";

export function useVProgressContext(): VProgressContextType {
  return useContext(VProgressContext);
}