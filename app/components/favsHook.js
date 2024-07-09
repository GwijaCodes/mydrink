import { useEffect, useRef, useState } from "react";

export const useFavsItems = () => {

    // carica i fav dal localstorage on init

    const [favs, setFavs] = useState([]);
    const firstRender = useRef(true);

    // salva favs in localstorage onchange

    useEffect(() => {
        if(firstRender.current){
            setFavs(JSON.parse(localstorage.getItem('favs')))
            firstRender.current = false;
        } else {
            localstorage.setItem('favs', JSON.stringify(favs));
        }
    }, [favs]);

    //funzione aggiungi fav

    const addFavs = (item) => {
        setFavs([...favs, item]);
    };

    //funzione rimuovi fav
    const removeFavs = (itemId) => {
        const updatedFavs = favs.filter((item) => item.id !== itemId) 
        setFavs(updatedFavs)
    }
}