import React from 'react';
import { useRef } from 'react'; 
import './App.css';

function App() {

    const cursor = useRef(null)
    const introContent = useRef(null);

    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;
    }

    const handleMouseEnter = () => {
        cursor.current.style.width = '40px';
        cursor.current.style.height = '40px';
    }

    const handleMouseLeave = () => {
        cursor.current.style.width = '30px';
        cursor.current.style.height = '30px';
    }

    const openPdf = () => {
        window.open('/resume.pdf', '_blank');
      };

    return (
        <div onMouseMove={changePosition}>
        <div className="cursor-style" ref={cursor}></div>
        <div className="intro-container">
            <div className="intro-content" ref={introContent}>
                <h1>Hey there!</h1>
                <p>My name is Calla, I'm a 4th year CS student at McGill who's passionate about art and development :D</p>
                <a href="https://github.com/clu2001">
                    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        GitHub Link
                    </button>
                </a>
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={openPdf}>
                    Resume
                </button>
            </div>
        </div>
        </div>
    );
}

export default App;
