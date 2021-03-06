import React from 'react';
import './homePage.css';
import ProfilePic from './profilepic.png';

const HomePage = () => {
    return (
        <div>
            <div className="et-hero-tabs-container">
                <a className="et-hero-tab" href="#about-me">About Me</a>
                <a className="et-hero-tab" href="#technicalprojects">Technical Projects</a>
                <a className="et-hero-tab" href="#communityservice">Community Service Projects</a>
                <a className="et-hero-tab" href="#contact">Contact</a>
            </div>
            <main className="et-main">
                <div className="et-slide" id="about-me">
                    <h1>Manish Shiwlani</h1>
                    <div className="flex">
                        <div>
                            <img
                                src={ProfilePic} alt="Manish" />
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

