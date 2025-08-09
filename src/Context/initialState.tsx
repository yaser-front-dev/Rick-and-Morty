import { useState, createContext } from "react";
import type { SearchContextType } from "../type/type";
import type { SearchProviderProps } from "../type/type";



// ایجاد کانتکست
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

// فراهم‌کننده کانتکست
export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [search, setSearch] = useState("");
  const [charactersFound, setCharactersFound] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch, charactersFound, setCharactersFound }}>
      {children}
    </SearchContext.Provider>
  );
};
