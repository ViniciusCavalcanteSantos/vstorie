import { createContext } from "react";
import { Config } from "../types/Config";

export const VContext = createContext<Config>({})

export function VContextProvider({ config, children }: { config: Config, children: React.ReactNode }) {
  return(
    <VContext.Provider value={config}>
      {children}
    </VContext.Provider>
  )
}