import useFaDate from '../../../../hooks/useFaDate';
import type { EpisodeItemProps } from '../../../../type/type';

function EpisodeItem({ index, episode, name, air_date } : EpisodeItemProps) {  
  const { faDate } = useFaDate(air_date)
  return (
    <div className='flex justify-between pb-3'>
      <p>{`${String(index! + 1).padStart(2, '0')} - ${episode} : ${name}`}</p>
      <div dir='rtl' className="bg-slate-500 rounded-lg px-2" >{faDate}</div>
    </div>
  )
}

export default EpisodeItem