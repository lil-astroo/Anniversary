import React from 'react'

export default function Special() {

    const note1 = `Post-offense indicators present at each scene

Indicators appear deliberately unfinished

Suggests offender is testing observation rather than hiding

This is not taunting.

This is calibration.`

    const note2 = `Interval between homicides is decreasing

Shift suggests evolving confidence or urgency

Accelerated timelines often precede either escalation…

or termination.`

    const note3 = `Early assumptions appear compelling but lack confirmation

Analysts caution against prioritizing pattern over anomaly

In this case, what doesn’t fit may matter more than what does.    `

    const note4 = `The offender demonstrates awareness of law enforcement procedures.

Actions imply familiarity with response times, scene processing, and investigative bias.

This subject is not reacting to us, He is anticipating us.

Every scene ends the same way with something intentionally missing.

The offender is leaving us a sentence.

We are expected to finish it.
`

    return (
        <div className="m-case">
            <header className="m-header">
                <h1>LAPD</h1>
                <span>Homicide Case File</span>
            </header>

            <section className="m-card">
                <label>OFFENDER BEHAVIORAL NOTES</label>
                <textarea value={note1} rows="12" />
            </section>

            <section className="m-card">
                <label>TEMPORAL ANALYSIS</label>
                <textarea value={note2} rows="10" />
            </section>

            <section className="m-card">
                <label>INVESTIGATIVE WARNINGS</label>
                <textarea value={note3} rows="9" />
            </section>

            <section className="m-card">
                <label>INTERNAL MEMO – RHD</label>
                <textarea value={note4} rows="17" />
            </section>
        </div>
    )
}
