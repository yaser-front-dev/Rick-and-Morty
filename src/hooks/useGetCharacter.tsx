import { useQuery } from '@tanstack/react-query'
import type { Character } from '../type/type'
import { getCharacter } from '../services/getCharacter'


function useGetCharacter({id} : {id : string | undefined}) {
    const query = useQuery<Character>({
        queryKey: ["getCharacter", id],
        queryFn: () => getCharacter(id),
        enabled: !!id
    })
    return query
}

export default useGetCharacter