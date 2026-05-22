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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur molestiae quis incidunt quibusdam. Ipsum dolor odio eum, aliquam molestiae, tempora deserunt nostrum tempore exercitationem saepe optio veritatis aperiam, accusamus velit?
                        </p>
                        <ul className="about-cards">
                            <li> 2nd Year BCA Student</li>
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