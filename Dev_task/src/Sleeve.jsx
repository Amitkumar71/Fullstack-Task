import React from 'react';
import './Sleeve.css';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const SleeveComponent = () => {
    return (
        <div className="s-container">
            <h1 className="title">Sleeve <span className='font-thin'>2</span></h1>
            <p className="s-description">The ultimate music accessory for your Mac.</p>
            <p className="details">
                Sleeve sits on the desktop, displaying and controlling the music you're
                <br></br>currently playing in Apple Music, Spotify, and Doppler.
            </p>
            <div className="buttons-container">
                <div className="buttons">
                    <button className="btn mac-store"><span><img src='640px-Apple_logo_black.svg.webp' width="30px"></img></span>Mac App Store</button>
                    <button className="btn buy-direct">
                        <span>Buy Directly</span>
                        <span className="price">$5.99</span>
                    </button>
                </div>
                <p className="note">No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or later.</p>
                <p className="new-release">
                    <a href="#" className="new-release-link">
                        <span className="icon">
                            <img src="./image1.png" width="64" height="72" alt="image"/>
                        </span>
                        {/* <span className="text-small">Sleeve 2.3 now available</span> */}
                        <span className="text-large">Now with <b>shelves and a progress bar</b>. <span>See what's new in Sleeve 2.3</span></span>
                        <span className='arrow-icon'><IoArrowForwardCircleOutline /></span>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SleeveComponent;
