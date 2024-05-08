import "../styles/AboutMe.css";
import AboutImg from "../images/about-image.png";
import Frontend from "../images/ui-design.svg";
import GameDevelopment from "../images/web-development.svg";

const AboutMe = () => {
    return (
        <>
            <section className="about">

                <div className="about-image">
                    <img src={AboutImg} alt="" />
                </div>

                <div className="about-text">
                    <h2>ABOUT ME</h2>
                    <h1>I&apos;m Oluwafemi Ojetokun</h1>

                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
            </section>

            <section className="what-i-do">
                <h2>WHAT I DO</h2>
                <h1>SPECIALIZING IN</h1>

                <div className="skills-cards">
                    <div className="skills-card">
                        <div>
                            <div className="skills-card-icon">
                                <img src={Frontend} alt="" />
                            </div>
                            <h2>FRONTEND WEB DEVELOPMENT</h2>
                        </div>
                        <p>Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
                    </div>
                    <div className="skills-card">
                        <div>
                            <div className="skills-card-icon">
                                <img src={GameDevelopment} alt="" />
                            </div>
                            <h2>GAME DEVELOPMENT</h2>
                        </div>
                        <p>Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;