import React, { useRef } from 'react'

import '../assets/styles/Gift.css'

export default function Gift({ title, link, disabled, opened }) {

    const boxDoorRef = useRef(null)

    const giftOpeningHandler = () => {
        if (disabled) {
            alert('You cannot open this gift yet! Come back later 🎁')
            return;
        };
        if (opened) {
            return;
        }

        boxDoorRef.current.classList.add('open')
        setTimeout(() => {
            window.location.href = `${process.env.PUBLIC_URL}${link}`;
        }, 2000)
        // alert('هنوز زوده بچه 25 دسامبر اینجا باش!')
    }

    return (
        <div className='gift-wrapper'>
            <div className="gift" onClick={giftOpeningHandler}>
                <div className="door" ref={boxDoorRef}>
                    <i></i>
                    <i></i>
                </div>
            </div>
            <span>{title}</span>
        </div>
    )
}
