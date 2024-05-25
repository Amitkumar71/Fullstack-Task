import React from 'react';
import './theme.css';
import { FaPause } from "react-icons/fa";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";


const SleeveComponent = () => {
    return (
        <div className="t-container">
            <small className="new-tag">
                New in
                <span className="version-tag">
                    2.0
                </span>
            </small>
            <h2 className="t-title">
                Themes.
                Unlimited themes.
            </h2>
            <p className="t-description">
                Themes in Sleeve make creating and switching between customizations
                easy. Share your own creations with friends and install as many themes
                as you like with just a double-click.
            </p>
            <div className='sub-container'>
                <div className="g-container">
                    <div className="item1">
                        <img src="ArtSlowMagic.png" width="150px" height="100px" alt="Image 1" />
                        <p>Eternal Sunshine</p>
                        <p>Forgotten Feels</p>
                        <p>Slow Magic</p>
                    </div>
                    <div className="item2">
                        <img src="ArtCarolinePolachek.jpg" width="150px" height="100px" alt="Image 2" />
                        <div className='two-text'>
                            <p>Bunny Is a Rider</p>
                            <p>Desire, I Want to Turn Into You
                                Caroline Polachek</p>
                            <div className='controls'><IoMdSkipBackward /><FaPause /><IoMdSkipForward /></div>
                        </div>
                    </div>
                    <div className="item3">
                        <img src="ArtChelseaCutler.jpg" width="150px" height="100px" alt="Image 3" />
                        <div className='controls'><IoMdSkipBackward /><FaPause /><IoMdSkipForward /></div>
                        <p>Are You Listening
                            How To Be Human
                            Chelsea Cutler
                        </p>
                    </div>
                    <div className="item4">
                        <img src="ArtPetitBiscuit.jpg" width="150px" height="100px" alt="Image 4" />
                        <p>Creation Comes Alive</p>
                        <p>Petit Biscuit</p>
                    </div>
                </div>
                <div className='last-section'>
                    <div className='right'>
                        <div className='r-text'>
                            <h2>Change it up</h2>
                            <p>Switch between themes with just a click.</p>
                            <p>Modify the built-in themes or create your own using Sleeve's extensive preferences.</p>
                        </div>
                        <div>
                            <img src="ThemeUIActiveDark.png" width="550px" alt="Image 1" />
                            <img src="ThemeUIDark.png" width="550px" alt="Image 2" />
                        </div>
                    </div>
                    <div className='left'>
                        <div className='l-text'>
                            <h2>Shareable</h2>
                            <p>Export your themes and share them with friends using the handy new Sleeve Theme file format.</p>
                            <p>Install themes from anywhere with a double-click or a drag and drop.</p>
                        </div>
                        <div>
                            <img src="ThemeExportDark.png" width="350px" height="100px" alt="Image 1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SleeveComponent;
