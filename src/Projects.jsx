import image2 from './assets/image2.png';
import image1 from './assets/image1.png';

function Projects(){
    return(
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <img src={image1} alt="" className="project-image" />
                        <div className="project-info">
                            <h3 className="project-title">Portfolio</h3>
                            <p className="project-description">
                                A clean and responsive portfolio template developed for
                                small businesses and professionals.</p>
                            <div className="project-btns">
                                <a href="https://silvestaj-dev.vercel.app/" className="project-btn">Visit Site</a>
                                <a href="#" className="project-btn">Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img  src={image2} alt="" className="project-image" />
                        <div className="project-info">
                            <h3 className="project-title">IT Department Portal</h3>
                            <p className="project-description">
                                A management system for tracking assets and managing 
                                departmental operations with different user roles.</p>
                            <div className="project-btns">
                                <a href="https://silvest.pythonanywhere.com/" className="project-btn">Visit Site</a>
                                <a href="https://github.com/SILVXT-AJ/it-project1" className="project-btn">Source</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
