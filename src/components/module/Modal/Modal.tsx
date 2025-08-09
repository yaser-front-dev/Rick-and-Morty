import { XCircleIcon } from "@heroicons/react/24/outline"
import ModalItem from "../ModalItem/ModalItem"
import { useContext } from "react"
import { FavoriteContext } from "../../../Context/FavoriteContext"
import type { ModalProps } from "../../../type/type"


export default function Modal({ show, onClose } : ModalProps) {
  const context = useContext(FavoriteContext)

  if (!context) {
    throw new Error("FavoriteContext must be used within a FavoriteProvider")
  }

  const { favorites, removeFromFavorites } = context;

  if (!show) return null

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(63,69,76,0.8)] backdrop-blur-sm flex items-center justify-center z-50 animate-fade"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl shadow-slate-600 w-[450px] min-h-[250px] p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p className="text-white">List of favourites</p>
          <XCircleIcon
            onClick={onClose}
            className="w-[25px] cursor-pointer text-red-500"
          />
        </div>
        <div className="bg-slate-600 w-full h-px mt-3 mb-3"></div>

        {favorites.length > 0 ? (
          favorites.map((item) => (
            <ModalItem
              key={item.id}
              {...item}
              delItem={removeFromFavorites}
            />
          ))
        ) : (
          <p className="text-white mt-5 text-center">No favourites yet.</p>
        )}
      </div>
    </div>
  )
}

