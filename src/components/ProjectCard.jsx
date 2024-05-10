import PropTypes from 'prop-types'; // Import PropTypes
import '../styles/ProjectCard.css';

const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imageLink} alt="project-img" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Technologies: {props.technologies}</p>
            <br />
            <button>View Demo</button>
        </div>
    );
}

// Define PropTypes for the required props
ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired
};

export default ProjectCard;
