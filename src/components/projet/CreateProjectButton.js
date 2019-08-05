import React from 'react';
import { Link } from 'react-router-dom';

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-info">
        Creer un projet
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
