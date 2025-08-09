import { TrashIcon } from '@heroicons/react/24/outline'
import type { ModalItemProps } from '../../../type/type'


function ModalItem({ name, image, id, status, delItem } : ModalItemProps) {
    return <>
            <div className="w-full mt-5 flex justify-between items-center rounded-lg bg-slate-800 py-2 px-3">
                <div className="flex gap-5 items-center">
                    <img className='w-15 rounded-2xl' src={image} alt="logo" />
                    <div className="">
                        <p className="">{name}</p>
                        <div className='flex gap-2 items-center'><div className={status == "Alive" ? `bg-[rgb(85,204,68)] rounded-full p-[6px]` : 'bg-[rgb(214,61,46)] rounded-full p-[6px]'} ></div>{status} </div>
                    </div>
                </div>
                <div className="text-red-600">
                    <button onClick={() => delItem(id)}>
                        <TrashIcon className='cursor-pointer' width={25} />
                    </button>
                </div>

            </div>
        </>
    
}

export default ModalItem