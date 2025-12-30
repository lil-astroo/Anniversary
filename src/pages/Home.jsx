import React from 'react'
import Gift from '../components/Gift'

export default function Home() {

    return (
        <div className="overlay">
            <div className='app'>
                <h2>THE LAST DAY</h2>
                <div className='gift-grid'>
                    <Gift title='Day 7' />
                </div>
            </div>
            {/* <div className='popup-wrapper'>
                <div className='popup'>
                    <p>روی هر جعبه کلیک کن تا هدیه اون روز رو بگیری🥳</p>
                    <button onClick={handleClose}>close</button>
                </div>
            </div> */}
        </div>
    )
}
