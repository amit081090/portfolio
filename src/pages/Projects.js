import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import {ProjectList}  from '../Helpers/ProjectList';
import '../Styles/Projects.css';


const Projects = () => {
  return (
    <div className='Projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project,idx)=>{ 

          return (<ProjectItem id={idx} name={project.name} image={project.image}/>
          );


        })}

      </div>
     </div>
  );
}

export default Projects;