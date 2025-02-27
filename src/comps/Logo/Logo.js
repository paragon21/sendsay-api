import React from 'react'
import './Logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <svg width="115" height="30" viewBox="0 0 115 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.2"/>
                <circle cx="70" cy="15" r="15" fill="black" fillOpacity="0.2"/>
                <rect x="35" width="15" height="30" fill="black" fillOpacity="0.2"/>
                <path d="M100 0H115L100 30H85L100 0Z" fill="black" fillOpacity="0.2"/>
            </svg>
        </div>
    )
}

export default Logo