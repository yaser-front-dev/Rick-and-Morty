import type { Dispatch, ReactNode, SetStateAction } from 'react'

////// Character item types
export type Character = {
    name: string,
    image: string,
    id: number,
    status: string,
    location?: {
        name: string
    },
    episode? : string[]
}

////// FavoriteContext types
export type FavoriteContextProvider = {
    children: ReactNode
}

export type FavoriteContextProps = {
    favorites: Character[]
    addToFavorites: (item: Character) => void
    removeFromFavorites: (id: number) => void
    isInFavorites: (id: number) => boolean
}

/// initialState Context types
export type SearchContextType = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    charactersFound: string;
    setCharactersFound: Dispatch<SetStateAction<string>>;
};

export type SearchProviderProps = {
    children: ReactNode;
};


/// Modal props
export type ModalProps = {
    show: boolean,
    onClose: () => void
}

/// Modal Item props
export type ModalItemProps = {
    name: string,
    image: string,
    id: number,
    status: string,
    delItem: (id: number) => void,
}

/// Episode Item props
export type EpisodeItemProps = {
    episode: string;
    name: string;
    air_date: string;
    index?: number;
}