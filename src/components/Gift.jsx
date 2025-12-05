import React, { useRef } from 'react'

import '../assets/styles/Gift.css'

export default function Gift({title}) {

    const boxDoorRef = useRef(null)

    const giftOpeningHandler = () => {
        // boxDoorRef.current.classList.add('open')
        alert('هنوز زوده بچه 25 دسامبر اینجا باش!')
    }

    return (
        <div className='gift-wrapper'>
            <div class="gift" onClick={giftOpeningHandler}>
                <div class="door" ref={boxDoorRef}>
                    <i></i>
                    <i></i>
                </div>
            </div>
            <span>{title}</span>
        </div>
    )
}
