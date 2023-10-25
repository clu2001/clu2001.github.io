import React from 'react';
import { useRef } from 'react'; 
import './App.css';

function App() {

    const cursor = useRef(null)
    const introContent = useRef(null);

    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;

        const tiltAmount = 20;
        const xTilt = (window.innerHeight / 2 - e.clientY) / tiltAmount;
        const yTilt = (e.clientX - window.innerWidth / 2) / tiltAmount;

        introContent.current.style.transform = `rotateX(${xTilt}deg) rotateY(${yTilt}deg)`;
    }

    const handleMouseEnter = () => {
        cursor.current.style.width = '40px';
        cursor.current.style.height = '40px';
    }

    const handleMouseLeave = () => {
        cursor.current.style.width = '30px';
        cursor.current.style.height = '30px';
    }

    return (
        <div onMouseMove={changePosition}>
        <div className="cursor-style" ref={cursor}></div>
        <div className="intro-container">
            <div className="intro-content" ref={introContent}>
                <h1>Hey there!</h1>
                <p>My name is Calla, I'm a 4th year CS student at McGill who's passionate about art and development :D</p>
                <a href="https://github.com/clu2001">
                    <button href="https://github.com/clu2001" 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}>
                            GitHub Link
                    </button>
                </a>
            </div>
        </div>
        </div>
    );
}

export default App;
