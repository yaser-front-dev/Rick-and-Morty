import { useQuery } from '@tanstack/react-query'
import { getEpisode } from '../services/getEpisode.js'

function useGetEpisode(episodesIdStr: string) {
    const query = useQuery({
        queryKey: ["getEpisode", episodesIdStr],
        queryFn: () => getEpisode(episodesIdStr),
        enabled: !!episodesIdStr
    })
    return query
}

export default useGetEpisode