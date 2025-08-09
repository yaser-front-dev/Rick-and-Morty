import { getAllCharacter } from '../services/getAllCharacter';
import { useQuery } from '@tanstack/react-query';

function useAllCharacter() {
    const query = useQuery({
        queryKey: ["allCharacter"],
        queryFn: getAllCharacter
    })
    return query
}

export default useAllCharacter