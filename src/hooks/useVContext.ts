import { VContext } from './../context/VContext';
import { useContext } from "react";

export function useVContext() {
  return useContext(VContext);
}