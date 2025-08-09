import { useContext } from "react";
import { FavoriteContext } from "../Context/FavoriteContext";

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavoriteContext must be used within a FavoriteProvider");
  }

  return context;
};
