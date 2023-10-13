import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </>
  );
};

export default ProjectList;
