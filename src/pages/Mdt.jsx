import { useState, useEffect } from "react";
import CaseFile from "../components/CaseFile";
import Notes from "../components/Notes";
import '../assets/styles/Mdt.css'

export default function Mdt() {
    const [activeCase, setActiveCase] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [officerAuth, setOfficerAuth] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("officerAuth")) {
            setOfficerAuth(true);
        }
    }, []);

    const cases = [
        {
            id: "LAPD-9142",
            victim: "Daniel R. Morales",
            age: 41,
            occupation: "Commercial Property Manager",
            location: "Koreatown – Interior residence",
            time: "Estimated between 22:30–23:30",
            date: "06/21/2025",
            status: "Open",
            info: `No signs of forced entry 
No visible struggle
Personal items undisturbed
Scene unusually orderly
Responding officers noted the environment appeared “prepared” rather than interrupted.
---------------
Investigator Note:
The absence of chaos is not evidence of peace.
It is often evidence of control.`,
        },
        {
            id: "LAPD-9241",
            victim: "Alina S. Weber",
            age: 29,
            occupation: "Freelance Photographer",
            location: "Downtown LA – Parking structure (Level 4)",
            time: "Approximately 3 days after Victim #1",
            date: "08/17/2025",
            status: "Open",
            info: `Victim exhibited defensive injuries
Phone recovered, recent outgoing calls unanswered
Witnesses reported victim appeared “anxious” earlier that evening
---------------
Evidence Note:
A marking was found at the scene bearing similarity to an element recovered in Case #1.
The resemblance is notable — the execution is not identical.`,
        },
        {
            id: "LAPD-9544",
            victim: "Marcus L. Henson",
            age: 36,
            occupation: "HVAC Technician",
            location: "Silver Lake – Private residence",
            time: "Shorter interval than previous cases",
            date: "10/02/2025",
            status: "Open",
            info: `Victim survived initial injuries briefly
Attempted to leave a message prior to death
---------------
Recovered Message:
Fragmented
Incomplete
Subject to interpretation
The content may represent:
"A name"
"A reference"
"A location"
"Or a misunderstanding formed under extreme stress"
---------------
Lead Detective Comment:
The message cannot be treated as truth —
only as intent.
`,
        },
    ];

    const loginHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("officerAuth", true);
        localStorage.setItem("officerName", e.target[0].value);
        window.location.reload();
    };

    if (!officerAuth) {
        return (
            <div className="login">
                <div className="login-card">
                    <h1>LAPD</h1>
                    <span className="login-sub">Secure Access</span>

                    <form className="login-form" onSubmit={loginHandler}>
                        <label>Username</label>
                        <input type="text" required />

                        <label>Password</label>
                        <input type="password" required />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="home">
            <header className="home-header">
                <h1>LAPD</h1>
                <span>Detctive {localStorage.getItem('officerName')} - Active Homicide Cases</span>
            </header>

            <section className="case-list">
                {cases.map((c) => (
                    <div
                        className="case-card"
                        key={c.id}
                        onClick={() => setActiveCase(c)}
                    >
                        <div className="case-top">
                            <span className="case-id">{c.id}</span>
                            <span className={`case-status ${c.status.toLowerCase()}`}>
                                {c.status}
                            </span>
                        </div>

                        <h2 className="case-title">{c.victim}</h2>

                        <div className="case-footer">
                            <span>View Case File →</span>
                        </div>
                    </div>
                ))}

                <div
                    className="case-card"
                    onClick={() => setModalOpen(true)}
                >
                    <div className="case-top">
                        <span className="case-id">Lead Detective</span>
                    </div>

                    <h2 className="case-title">important notes</h2>

                    <div className="case-footer">
                        <span>View Notes →</span>
                    </div>
                </div>
            </section>

            {activeCase && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            className="modal-close"
                            onClick={() => setActiveCase(null)}
                        >
                            ✕
                        </button>

                        <CaseFile cData={activeCase} />
                    </div>
                </div>
            )}

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            className="modal-close"
                            onClick={() => setModalOpen(false)}
                        >
                            ✕
                        </button>

                        <Notes />
                    </div>
                </div>
            )}

        </div>
    );
}
