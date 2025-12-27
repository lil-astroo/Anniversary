import { useState } from "react";
import "../assets/styles/CaseFile.css";

export default function CaseFile({ cData = {}, mode = "view", onCreate }) {
    const [victim, setVictim] = useState(cData.victim || "");
    const [status, setStatus] = useState(cData.status || "Open");

    const isCreate = mode === "create";

    const submitHandler = () => {
        if (!victim) return;

        onCreate({
            id: `LAPD-${Math.floor(1000 + Math.random() * 9000)}`,
            victim,
            status,
        });
    };

    return (
        <div className="m-case">
            <header className="m-header">
                <h1>LAPD</h1>
                <span>Homicide Case File</span>
            </header>

            <section className="m-card">
                <label>Case Number</label>
                <input value={cData.id || "AUTO-GENERATED"} readOnly />

                <label>Date</label>
                <input value={cData.date || "—"} readOnly />

                <label>Victim Name</label>
                <input
                    type="text"
                    value={victim}
                    readOnly={!isCreate}
                    onChange={(e) => setVictim(e.target.value)}
                />

                <label>Age</label>
                <input value={cData.age || "—"} readOnly />

                <label>Occupation</label>
                <input value={cData.occupation || "—"} readOnly />

                <label>Location</label>
                <input value={cData.location || "—"} readOnly />

                <label>Time of Death</label>
                <input value={cData.time || "—"} readOnly />

                <label>Cause of Death</label>
                <input value={cData.cause || "—"} readOnly />

                <label>Notes</label>
                <textarea value={cData.info || ""} readOnly rows="4" />
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
                <input
                    value={localStorage.getItem("officerName") || "—"}
                    readOnly
                />

                <label>Status</label>
                <select
                    disabled={!isCreate}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Open">Open</option>
                    <option value="Pending">Pending</option>
                    <option value="Closed">Closed</option>
                </select>
            </section>


            {isCreate && (
                <button className="m-create-btn" onClick={submitHandler}>
                    Create Case
                </button>
            )}
        </div>
    );
}