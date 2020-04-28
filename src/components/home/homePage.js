import React from 'react';
import './homePage.css';


function HomePage() {
    return (
        <div>
            <header>
                <div className="et-hero-tabs">
                    <div className="et-hero-tabs-container">
                        <a className="et-hero-tab" href="#about-me">About Me</a>
                        <a className="et-hero-tab" href="#technicalprojects">Technical Projects</a>
                        <a className="et-hero-tab" href="#communityservice">Community Service Projects</a>
                        <a className="et-hero-tab" href="#contact">Contact</a>
                        <span className="et-hero-tab-slider"></span>
                    </div>
                </div>
            </header>
            <main className="et-main">
                <div className="et-slide" id="about-me">
                    <h1>About Me</h1>
                    <div className="flex">
                        <div>
                            <img
                                src={process.env.PUBLIC_URL + '/profile.png'} alt="Manish" />
                            <h2>Manish Shiwlani</h2>
                        </div>
                    </div>
                </div>
                <div className="et-slide" id="technicalprojects">
                    <h1>Technical Projects</h1>
                </div>
                <div className="et-slide" id="communityservice">
                    <h1>Community Service Projects</h1>
                </div>
                <div className="et-slide" id="contact">
                    <h1>Contact</h1>
                </div>

            </main>
        </div >
    );
}
export default HomePage;

