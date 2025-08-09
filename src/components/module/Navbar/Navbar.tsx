import  { useState } from 'react'
import { useSearchContext } from '../../../hooks/useSearchContext';
import { useFavoriteContext } from '../../../hooks/useFavoritesContext';
import Modal from '../Modal/Modal';

function Navbar() {
    const { charactersFound, search, setSearch } = useSearchContext();
    const { favorites } = useFavoriteContext()
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Modal show={showModal} onClose={() => setShowModal(false)} />
            <nav className='grid grid-cols-12 w-full bg-slate-600 px-5 py-4 rounded-xl items-center'>
                {/* logo  */}
                <div className="col-span-1">
                    <img src="/vite.svg" alt="logo" />
                </div>
                {/* userName */}
                <p className="font-bold text-lg col-span-3 text-center">yaser abbasi</p>
                {/* search box */}
                <div className="col-span-4 flex justify-center">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='bg-slate-400 rounded-lg py-2 w-[80%] pl-2 outline-none' placeholder='search' />
                </div>
                {/*  characters found */}
                <div className="col-span-3 text-center text-gray-400">found {charactersFound} characters</div>
                {/* favorite */}
                <div className="col-span-1 text-red-600 flex justify-end">
                    <div className="relative cursor-pointer">
                        <svg onClick={() => setShowModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        {/* badge */}
                        {favorites.length > 0 ? (
                            <div className="absolute top-[-50%] right-[-50%] rounded-full flex justify-center items-center w-5 text-[12px] bg-red-600 text-white">{favorites.length}</div>
                        ) : null}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar