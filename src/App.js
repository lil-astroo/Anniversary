import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import routes from './routes'

import audioSrc from './assets/jingle.mp3';

import './App.css'

export default function App() {
    const router = useRoutes(routes);
    const audioRef = useRef(null);

    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    useEffect(() => {
        const playSound = () => {
            audioRef.current.volume = 0.2;
            audioRef.current.play();
            window.removeEventListener("click", playSound);
        };

        window.addEventListener("click", playSound);

        return () => window.removeEventListener("click", playSound);
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles Loaded:", container);
    };

    const options = useMemo(() => ({
        background: {
            color: "transparent",
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 120, // با عکس کمتر بهتره
                density: {
                    enable: true,
                    area: 800,
                },
            },
            shape: {
                type: "image",
                options: {
                    image: [
                        { src: '/img/heart.png'},
                        { src: '/img/fireheart.png'},
                    ]
                }
            },
            opacity: {
                value: { min: 0.6, max: 1 },
            },
            size: {
                value: { min: 5, max: 15 },
                random: true,
            },
            move: {
                enable: true,
                direction: "bottom",
                speed: { min: 0.5, max: 2 },
                outModes: {
                    default: "out",
                },
            },
            wobble: {
                enable: true,
                distance: 10,
                speed: 10,
            },
        },
        interactivity: {
            events: {
                onHover: { enable: false },
                onClick: { enable: false },
            },
        },
        detectRetina: true,
    }), []);

    return (
        <React.Fragment>
            {init && (
                <Particles
                    id="tsparticles"
                    options={options}
                    particlesLoaded={particlesLoaded}
                />
            )}

            <audio
                src={audioSrc}
                ref={audioRef}
                preload='auto'
                loop
            />

            {router}
        </React.Fragment>
    )
}
