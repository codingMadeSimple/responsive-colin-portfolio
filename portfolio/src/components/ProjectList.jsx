import React from "react";
import "../styles/Portfolio.scss";
import ProjectListItem from "./ProjectListItem";

function PortfolioList(props) {
  const projectArray = props.projectObject.map((project)=>{
    return <ProjectListItem 
    key={project} 
    projectObject={project}
    />
  })

  return (
    <div>
      {projectArray}
    </div>

  );
}

export default PortfolioList;