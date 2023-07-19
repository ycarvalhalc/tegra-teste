import { createContext, useState } from "react";

export const UserContext = createContext<any>(null)

export function UserProvider({children}: { children: React.ReactNode }) {
  const [users, setUsers] = useState()

  return <UserContext.Provider value={{users, setUsers}}>{children}</UserContext.Provider>
}