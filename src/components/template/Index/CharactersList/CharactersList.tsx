import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import type { Character } from '../../../../type/type'

function CharactersList({ id, name, status, image } : Character) {
    return (
        <div className="w-full mb-5 flex justify-between items-center rounded-lg bg-slate-800 py-2 px-3">
            <div className="flex gap-5 items-center">
                <img className='w-15 rounded-2xl' src={image} alt="logo" />
                <div className="">
                    <p className="">{name}</p>
                    <div className='flex gap-2 items-center'><div className={status == "Alive" ? `bg-[rgb(85,204,68)] rounded-full p-[6px]` : 'bg-[rgb(214,61,46)] rounded-full p-[6px]'} ></div>{status} </div>
                </div>
            </div>
            <div className="text-red-600">
                <Link to={`/${id}`}>
                    {true ? (<EyeIcon width={25} />) : <EyeSlashIcon width={25} />}
                </Link>
            </div>

        </div>
    )
}

export default CharactersList