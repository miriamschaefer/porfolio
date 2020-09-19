import React from 'react';

const ProjectDetail = (props) => {
  const { name, web, github } = props;
  return (
    <div>
      {name}, {web}, {github}
    </div>
  );
};

export default ProjectDetail;
