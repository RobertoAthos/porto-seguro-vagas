import { createClient } from "@/utils/supabase/client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
// }

interface UserContextProps {
  user: any | null;
  setUser: (user: any | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      const supabase = createClient();
      const {data} = await supabase.auth.getUser();
      setUser(data.user);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
