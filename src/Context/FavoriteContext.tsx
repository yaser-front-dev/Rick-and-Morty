import { createContext, useState, useEffect } from 'react'
import type { Character } from '../type/type'
import type { FavoriteContextProvider } from '../type/type'
import type { FavoriteContextProps } from '../type/type'


export const FavoriteContext = createContext<FavoriteContextProps | undefined>(undefined)

export const FavoriteProvider = ({ children }: FavoriteContextProvider) => {
  const [favorites, setFavorites] = useState<Character[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('favorite')
      setFavorites(stored ? JSON.parse(stored) : [])
    } catch {
      setFavorites([])
    }
  }, [])


  const addToFavorites = (item: Character) => {
    const updated = [...favorites, item]
    setFavorites(updated)
    localStorage.setItem('favorite', JSON.stringify(updated))
  }

  const removeFromFavorites = (id: number) => {
    const updated = favorites.filter(fav => fav.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorite', JSON.stringify(updated))
  }

  const isInFavorites = (id: number) => {
    return favorites.some(item => item.id === id)
  }

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isInFavorites }}>
      {children}
    </FavoriteContext.Provider>
  )
}
