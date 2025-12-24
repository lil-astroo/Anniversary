import React from 'react'

export default function Special() {
    return (
        <div className="m-case">
            <header className="m-header">
                <h1>LAPD</h1>
                <span>Homicide Case File</span>
            </header>

            <section className="m-card">
                <label>Case Number</label>
                <input readOnly type="text" />

                <label>Date</label>
                <input readOnly type="date" />

                <label>Victim Name</label>
                <input readOnly type="text" />

                <label>Age</label>
                <input readOnly type="number" />

                <label>Occupation</label>
                <input readOnly type="text" />

                <label>Location</label>
                <input readOnly type="text" />

                <label>Time of Death</label>
                <input readOnly type="time" />

                <label>Cause of Death</label>
                <input readOnly type="text" />

                <label>Notes</label>
                <textarea rows="4" />
            </section>

            <section className="m-evidence">
                <h2>Evidence</h2>
                <div className="m-evidence-grid">
                    <div className="m-evidence-box">+</div>
                    <div className="m-evidence-box">+</div>
                    <div className="m-evidence-box">+</div>
                </div>
            </section>

            <section className="m-footer">
                <label>Detective</label>
                <input readOnly type="text" />

                <label>Status</label>
                <select disabled>
                    <options>Open</options>
                    <option selected>Pending</option>
                    <option>Closed</option>
                </select>
            </section>
        </div>
    )
}
