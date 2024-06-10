import React from "react"
import { useState } from "react"

export default function Star({isFav}){
    const [fill, setFill] = useState('none')

    const starred = (e) => {
        if (e.defaultPrevented) return
        e.preventDefault()
        
        fill=='none'? (setFill('#000')) : (setFill('none'))

    }

    return(
        <div onClick={starred}>
            <svg width="38px" height="40px" viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg">
                <g id="star" transform="translate(-2 -3)">
                    <path id="secondary" fill={fill} d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z"/>
                    <path id="primary" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z" fill="none" stroke="#000000" strokeWidth="1"/>
                </g>
                </svg>
        </div>
    )
}