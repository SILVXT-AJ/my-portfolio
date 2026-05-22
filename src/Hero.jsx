import hero from './assets/hero.jpg'

function Hero() {
    return (
        <section id="home" className="hero-section">
        <div className="container">
            <h3 className='hero-name'>Hey, I'm Silvest AJ</h3>
            <h1 className="hero-title"><span className="hero-stack" >Full-Stack</span> Developer</h1>
            <p className="hero-subtitle">
            I'm a 2nd year BCA student passionate about full-stack development and creating simple, effective solutions to real-world problems.            </p>
            <a href="#projects" className='button-project' >Browse Projects</a>
        </div>
        <div className='image-container'>
            <img src={hero} alt="" className='main-image' />
        </div>
        </section>
    );
}

export default Hero;