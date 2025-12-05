import React from 'react'
import Gift from './components/Gift'
import './App.css'

export default function App() {
    return (
        <div className="overlay">
            <div className='app'>
                {/* <h2>7 Days Until Our Anniversary</h2> */}
                <h2>Come back here when it's 25th of December</h2>
                <div className='gift-grid'>
                    <Gift title='Day 1' />
                    <Gift title='Day 2' />
                    <Gift title='Day 3' />
                    <Gift title='Day 4' />
                    <Gift title='Day 5' />
                    <Gift title='Day 6' />
                    <Gift title='Day 7' />
                </div>
            </div>
        </div>
    )
}
