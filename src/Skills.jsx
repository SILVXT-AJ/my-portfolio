function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                <div className="skill-column">
                    <h3 className="skill-title">Web Design</h3>
                    <ul className="skill-list">
                        <li>Responsive Design</li>
                        <li>Wireframing</li>
                    </ul>
                </div>         
                <div className="skill-column">
                    <h3 className="skill-title">Frontend</h3>
                    <ul className="skill-list">
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>CSS3</li>
                    </ul>
                </div>            
                <div className="skill-column">
                    <h3 className="skill-title">Backend</h3>
                    <ul className="skill-list">
                        <li>NodeJs</li>
                        <li>MongoDB</li>
                        <li>Vercel</li>
                    </ul>
                </div>          
                <div className="skill-column">
                    <h3 className="skill-title">Soft Skills</h3>
                    <ul className="skill-list">
                        <li>Effective communication</li>
                        <li>Collaboration</li>
                        <li>Leadership</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;