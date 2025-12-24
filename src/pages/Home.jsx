import React from 'react'
import Gift from '../components/Gift'

export default function Home() {

    const handleClose = () => {
        document.querySelector('.popup-wrapper').style.display = 'none'
    }

    return (
        <div className="overlay">
            <div className='app'>
                {/* <h2>7 Days Until Our Anniversary</h2> */}
                <h2>Come back here when it's 25th of December</h2>
                <div className='gift-grid'>
                    <Gift link={null} title='Day 1' />
                    <Gift disabled link='/lapd' title='Day 2' />
                    <Gift disabled link='/timeline' title='Day 3' />
                    <Gift disabled title='Day 4' />
                    <Gift disabled title='Day 5' />
                    <Gift disabled title='Day 6' />
                    <Gift disabled title='Day 7' />
                </div>
            </div>
            <div className='popup-wrapper'>
                <div className='popup'>
                    <p>روی هر جعبه کلیک کن تا هدیه اون روز رو بگیری🥳</p>
                    <button onClick={handleClose}>close</button>
                </div>
            </div>
        </div>
    )
}
