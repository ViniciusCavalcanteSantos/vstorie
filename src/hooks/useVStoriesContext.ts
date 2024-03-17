import { VStoriesContext, VStoriesContextType } from '../context/VStoriesContext';
import { useContext } from "react";

export function useVStoriesContext(): VStoriesContextType {
  return useContext(VStoriesContext);
}