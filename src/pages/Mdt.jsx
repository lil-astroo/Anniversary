import { useState, useEffect } from "react";
import CaseFile from "../components/CaseFile";
import "../assets/styles/Mdt.css";

export default function Mdt() {
    const [officerAuth, setOfficerAuth] = useState(false);
    const [cases, setCases] = useState([]);
    const [activeCase, setActiveCase] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Load auth & cases
    useEffect(() => {
        if (localStorage.getItem("officerAuth")) {
            setOfficerAuth(true);
        }

        const savedCases = localStorage.getItem("mdt_cases");
        if (savedCases) {
            setCases(JSON.parse(savedCases));
        }
    }, []);

    // ===== LOGIN =====
    const loginHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("officerAuth", "true");
        localStorage.setItem("officerName", e.target.username.value);
        setOfficerAuth(true);
    };

    // ===== CREATE CASE =====
    const createCaseHandler = (e) => {
        e.preventDefault();

        const newCase = {
            id: `LAPD-${Math.floor(1000 + Math.random() * 9000)}`,
            victim: e.target.victim.value,
            status: e.target.status.value,
        };

        const updatedCases = [...cases, newCase];
        setCases(updatedCases);
        localStorage.setItem("mdt_cases", JSON.stringify(updatedCases));

        setModalOpen(false);
    };

    // ===== LOGIN PAGE =====
    if (!officerAuth) {
        return (
            <div className="login">
                <div className="login-card">
                    <h1>LAPD</h1>
                    <span className="login-sub">Secure Access</span>

                    <form className="login-form" onSubmit={loginHandler}>
                        <label>Username</label>
                        <input name="username" type="text" required />

                        <label>Password</label>
                        <input type="password" required />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    const score = cases.filter(c => c.status === "Closed").length;

    // ===== MAIN MDT =====
    return (
        <div className="home">
            <header className="home-header">
                <h1>LAPD</h1>
                <div className="home-sub">
                    <span>
                        Detective {localStorage.getItem("officerName")} — Score: {score}
                    </span>
                    <span className="new-case" onClick={() => setModalOpen(true)}>
                        New Case +
                    </span>
                </div>
            </header>

            {/* CASE LIST */}
            <section className="case-list">
                {cases.length === 0 && (
                    <p className="empty">No active cases</p>
                )}

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
            </section>

            {/* CASE FILE MODAL */}
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

            {/* NEW CASE MODAL */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            className="modal-close"
                            onClick={() => setModalOpen(false)}
                        >
                            ✕
                        </button>

                        <CaseFile
                            mode="create"
                            onCreate={(newCase) => {
                                const updated = [...cases, newCase];
                                setCases(updated);
                                localStorage.setItem("mdt_cases", JSON.stringify(updated));
                                setModalOpen(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}