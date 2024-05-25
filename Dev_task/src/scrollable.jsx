import React from 'react';
import './Scrollable.css';

const Scrollable = () => {
    return (
        <div class="main">
            <div class="app">
                <div class="content">
                    <div class="icon">
                        <img src='image6.png' height="150px" width="150px"></img>
                    </div>
                    <div class="text">
                        <h1>Artwork</h1>
                        <p>
                            Scale artwork all the way up or all the way down. Round the corners
                            or leave them square.
                        </p>
                        <p>
                            Choose shadow and lighting effects to bring your album artwork to
                            life.
                        </p>
                        <p>Or hide it completely.</p>
                    </div>
                </div>
                <div className='background'></div>
                <div class="s-controls">
                    <div class="control-group">
                        <img src='Artwork1Dark.jpg'></img>
                    </div>
                    <div class="control-group">
                        <img src='Artwork2Dark.jpg'></img>
                    </div>
                    <div class="control-group">
                        <img src='Artwork3Dark.jpg'></img>
                    </div>
                </div>
            </div>
            <div class="app">
                <div class="content">
                    <div class="icon">
                        <img src='IconArrayTrack@2x.png' height="150px" width="150px"></img>
                    </div>
                    <div class="text">
                        <h1>Typography</h1>
                        <p>
                            Pick the track info you want to display, and then exactly how to display it.
                        </p>
                        <p>
                            Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.
                        </p>
                    </div>
                </div>
                <div class="s-controls">
                    <div class="control-group">
                        <img src='Typography1Dark.jpg'></img>
                    </div>
                    <div class="control-group">
                        <img src='Typography2Dark.jpg'></img>
                    </div>
                </div>
            </div>
            <div class="app">
                <div class="content">
                    <div class="icon">
                        <img src='IconInterface.png' height="150px" width="150px"></img>
                    </div>
                    <div class="text">
                        <h1>Interface</h1>
                        <p>
                            Customize the layout, alignment and position to fit your setup.
                        </p>
                        <p>
                            Show and hide playback controls. Add a backdrop layer and customize it.
                        </p>
                    </div>
                </div>
                <div class="s-controls">
                    <div class="control-group">
                        <img src='Interface1Dark.jpg'></img>
                    </div>
                    <div class="control-group">
                        <img src='Interface2Dark.jpg'></img>
                    </div>
                </div>
            </div>
            <div class="last-app">
                <div class="content">
                    <div class="icon">
                        <img src='image7.png' height="150px" width="150px"></img>
                    </div>
                    <div class="text">
                        <h1>Settings</h1>
                        <p>
                            Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.
                        </p>
                        <p>
                            Show it in the Dock, choose from custom icons, or keep it on the Desktop only.

                        </p>
                        <p>Set your custom keyboard shortcuts and integrate with the apps you use.
                        </p>
                    </div>
                </div>
                <div class="s-controls">
                    <div class="control-group">
                        <img src='Settings1Dark.jpg'></img>
                    </div>
                    <div class="control-group">
                        <img src='Settings3Dark.jpg'></img>
                    </div>
                </div>
            </div>
            <div>
            <small className="s-tag">
            INTEGRATIONS
            </small>
            <h2 className="s-title">
            Like, Scrobble.
            </h2>
            </div>
        </div>

    );
};

export default Scrollable;
