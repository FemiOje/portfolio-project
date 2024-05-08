import '../App.css';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Oluwafemi Ojetokun</h1>
        <h3>Front-end Developer | Game Programmer/ Developer</h3>
      </div>


      <div className="social-links">
        <a href="https://www.twitter.com/FemiOje">Twitter svg</a>
        <a href="mailto:ojetokunakinwale@gmail.com">Gmail svg</a>
        <a href="https://www.linkedin.com/">LinkedIn svg(fix link)</a>
        <a href="https://www.github.com/FemiOje">GitHub svg</a>
      </div>

    </section>
  );
}

export default Hero;
