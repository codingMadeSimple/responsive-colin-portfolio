

function ProjectListItem(props) {

  const projectObject = props.projectObject;



  return (
    <div className="project-list-item">
      <h2 className="project-list-item-title">{props.projectObject[0].projectName}</h2>
      <div className="project-list-item-card">
        <img className="project-list-item-img" src="https://raw.githubusercontent.com/NeonWaffles222/Charcoal-Cabernet/master/docs/Top%20of%20Homepage.png" />
        <p className="project-list-item-description">{props.projectObject[0].projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectListItem;
