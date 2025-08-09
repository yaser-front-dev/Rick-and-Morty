import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import EpisodeItem from '../EpisodeItem/EpisodeItem'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import type { EpisodeItemProps } from '../../../../type/type.js'
import useGetCharacter from '../../../../hooks/useGetCharacter.js'
import useGetEpisode from '../../../../hooks/useGetEpisode.js'

function EpisodeList() {

    const [episodes, setEpisodes] = useState<EpisodeItemProps[]>([])
    const { id } = useParams()
    const toggleIcon = useRef<SVGSVGElement | null>(null)

    const { data } = useGetCharacter({ id })

    const episodesId = data?.episode?.map((e: string) => e.split('/').at(-1)) || [];
    const episodesIdStr = episodesId.join(',');

    const { data: episodeData } = useGetEpisode(episodesIdStr)


    useEffect(() => {
        if (episodeData) {
            setEpisodes(Array.isArray(episodeData) ? episodeData : [episodeData]);
        }
    }, [episodeData])


    const sortHandler = () => {
        setEpisodes(prev => [...prev].reverse())
        toggleIcon.current!.classList.toggle("rotate-180")
    }

    return (
        <div className="mt-5 p-3 rounded-lg bg-slate-800">
            <div className="flex justify-between pb-4">
                <p className="font-bold text-slate-400">List of Episodes</p>
                <ArrowDownCircleIcon ref={toggleIcon} className={`cursor-pointer transition-all duration-300 ease-in-out`} onClick={sortHandler} width={25} />
            </div>
            {episodes?.map((episode, index) => (
                <EpisodeItem {...episode} index={index} key={index} />
            ))}
        </div>
    )
}

export default EpisodeList
