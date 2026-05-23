function About(){
    return(
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I am a passionate Full-Stack Developer and currently a 2nd-year BCA student. 
                            I have a strong interest in building clean, scalable web applications and 
                            constantly learning new technologies to improve my craft.
                        </p>
                        <p>
                            a motivated developer on a journey to master the MERN Stack. I enjoy the process of 
                            turning a blank screen into a functional application. My current focus is on building responsive
                             frontends with React and learning how to manage data efficiently with MongoDB and Node.js                        </p>
                        <ul className="about-cards">
                            <li> 3rd Year BCA Student</li>
                            <li> Full-Stack Web Developer</li>
                            <li> Web Designer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;