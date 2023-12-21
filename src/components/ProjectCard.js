import React from 'react';
//import './ProjectCard.css'; // Import your CSS file

const ProjectCard = ({ name, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${name} Screenshot`} className="project-image" />
      <div className="project-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
