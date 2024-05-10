import projectsData from '../data/ProjectsData.json';
import ProjectCard from './ProjectCard';
import '../styles/ProjectList.css';

const ProjectList = () => {
    return (
        <>
            <section className="portfolio">
                <h2>PORTFOLIO</h2>
                <h1>LATEST PROJECTS</h1>

                <div className="project-cards">

                </div>
            </section>

            <div className='project-cards'>
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        imageLink={project.imageLink}
                        technologies={project.technologies} />
                ))}
            </div>
        </>
    );
}

export default ProjectList;
