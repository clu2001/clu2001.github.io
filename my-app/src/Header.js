import React from 'react';
import './App.css';

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <a className="store-link" href="/" title="Calla Lu">James Lee Chiahan</a>
                <a className="open-overlay" href="https://www.inprnt.com/gallery/buttmcbutt/" target="_blank">Shop Prints</a>
                <a className="open-overlay" href="/products">Shop Originals</a>
            </div>
        </header>
    );
}

export default Header;
