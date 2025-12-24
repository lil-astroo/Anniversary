import React, { useRef } from 'react'

import '../assets/styles/Gift.css'

export default function Gift({ title, link, disabled }) {

    const boxDoorRef = useRef(null)

    const giftOpeningHandler = () => {
        if (disabled) {
            alert('You cannot open this gift yet! Come back later 🎁')
            return;
        };

        boxDoorRef.current.classList.add('open')
        setTimeout(() => {
            if (link === null) {
                alert('YOU GOT AN EDIT FOR DAY 1 🎉🎉✨✨')
                const a = document.createElement("a");
                a.href = "/img/edit.mp4";   // مسیر فایل
                a.download = "edit.mp4";      // اسم فایل
                a.click();
            }
            else {
                window.location.href = link
            }
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
