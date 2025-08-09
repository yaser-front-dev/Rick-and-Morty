import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EpisodeList from '../EpisodeList/EpisodeList'
import { RotatingLines } from 'react-loader-spinner'
import { useSearchContext } from '../../../../hooks/useSearchContext'
import { useFavoriteContext } from '../../../../hooks/useFavoritesContext'
import useGetCharacter from '../../../../hooks/useGetCharacter'



function Details() {
  const { id } = useParams()
  const { setSearch } = useSearchContext()
  const { addToFavorites, isInFavorites } = useFavoriteContext()
  const [itemStatus, setItemStatus] = useState(false)

  const { data, isPending } = useGetCharacter({ id })



  useEffect(() => {
    setSearch("")
  }, [id])

  useEffect(() => {
    if (data) {
      setItemStatus(isInFavorites(data.id))
    }
  }, [data, isInFavorites])

  const handleAddToFavorites = () => {
    if (data) {
      addToFavorites(data)
    }
    setItemStatus(true)
  }

  return (
    <>
      <div className="">
        {
          isPending || !data ? (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          ) : (
            <div className="flex gap-5 w-full rounded-lg bg-slate-800 min-h-[190px] overflow-hidden">
              <img className='h-[216px]' src={data.image} alt="logo" />
              <div className="py-5 flex flex-col gap-3">
                <div>
                  <p>{data.name}</p>
                  <div className='flex gap-2 items-center'>
                    <div className={data.status === "Alive" ? `bg-[rgb(85,204,68)] rounded-full p-[6px]` : 'bg-[rgb(214,61,46)] rounded-full p-[6px]'}></div>
                    {data.status}
                  </div>
                </div>
                <div>
                  <p className="text-white/45">last location</p>
                  <div>{data.location?.name}</div>
                </div>
                {itemStatus ? (
                  <h1 className='text-slate-500'>Already Added to Favourite</h1>
                ) : (
                  <button
                    onClick={handleAddToFavorites}
                    className="bg-slate-500 w-[145px] text-white font-bold rounded-2xl py-3 px-4 cursor-pointer"
                  >
                    add to favorite
                  </button>
                )}
              </div>
            </div>
          )
        }
      </div>
      <EpisodeList />
    </>
  )
}

export default Details
