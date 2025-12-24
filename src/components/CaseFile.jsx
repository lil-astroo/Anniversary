import '../assets/styles/CaseFile.css';

export default function CaseFile({ cData }) {
    return (
        <div className="m-case">
            <header className="m-header">
                <h1>LAPD</h1>
                <span>Homicide Case File</span>
            </header>

            <section className="m-card">
                <label>Case Number</label>
                <input value={cData.id} readOnly type="text" />

                <label>Date</label>
                <input value={cData.date} readOnly type="text" />

                <label>Victim Name</label>
                <input value={cData.victim} readOnly type="text" />

                <label>Age</label>
                <input value={cData.age} readOnly type="number" />

                <label>Occupation</label>
                <input value={cData.occupation} readOnly type="text" />

                <label>Location</label>
                <input value={cData.location} readOnly type="text" />

                <label>Time of Death</label>
                <input value={cData.time} readOnly type="text" />

                <label>Cause of Death</label>
                <input value={cData.id} readOnly type="text" />

                <label>Notes</label>
                <textarea value={cData.info} rows="4" />
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
                <input value={cData.id} readOnly type="text" />

                <label>Status</label>
                <select disabled>
                    <option selected>Open</option>
                    <option>Pending</option>
                    <option>Closed</option>
                </select>
            </section>
        </div>
    );
}
