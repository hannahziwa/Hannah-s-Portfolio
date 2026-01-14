
import { useEffect, useState } from 'react';

const About = () => {
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        // Trigger the transition after a short delay to ensure mount
        const timer = setTimeout(() => setShowInfo(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="about-container">
            <div className={`intro-text${showInfo ? ' show-info' : ''}`}>
                <h1>Hiya, I'm Hannah!</h1>
                <p>A Software Engineering graduate from the University of Portsmouth with 4 years of experience, and this is
                    where you get to know more about my journey, skills and hopefully we can connect through this!</p>
            </div>
            <div className={`intro-image${showInfo ? ' show-info' : ''}`}>
                <img src="./src/images/headshot.PNG" alt="headshot" className="headshot" />
            </div>
        </section>
    );
}

export default About;
