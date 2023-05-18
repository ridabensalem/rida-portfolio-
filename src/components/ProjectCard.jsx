import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, description, image, liveUrl, sourceUrl } = project;

  return (
    <div className=" project-desc mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-56 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pb-4">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
          Live
        </a>
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
