import React from "react";
import { useState, useEffect } from "react";
import '../globals.css';

export default function Star({ id, pic, name, isFav }) {
    const [fill, setFill] = useState('none')
    const [favs, setFavs] = useState([]);

    // const fetchFavs = async () => {
    //     fetch(`http://localhost:3001/favdrinks`)
    //         .then(response => response.json())
    //         .then(data => setFavs(data))
    //         .catch(err => console.log(err))
    // }

    const starred = (e) => {
        if (e.defaultPrevented) return
        e.preventDefault()
        fill == 'none' ? (setFill('#D95F43')) : (setFill('none'))

        if (fill == 'none') {
            let newFav = { id: id, name: name, url: pic }
            setFavs(favs.concat(newFav))
            setIsFav(true)
            
        } else {
            let newFav = { id: id, name: name, url: pic }
            // setFavs(favs.pop(newFav))
        }
    }
    
    useEffect(()=>{
        console.log(favs)
    })



    return (
        <div className="w-10 h-10 p-2 rounded-full bg-[--teal] flex items-center" onClick={starred}>
            <svg width="38px" height="40px" viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg">
                <g id="star" transform="translate(-2 -3)">
                    <path id="secondary" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z" />
                    <path id="primary" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z" fill="none" stroke="#D95F43" strokeWidth="1" />
                </g>
            </svg>
        </div>
    )
}