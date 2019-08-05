import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectItem from './projet/ProjectItem';
import CreateProjectButton from './projet/CreateProjectButton';
import { getProjects } from '../actions/ProjectActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projet</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              {/* TODO: Faire un map pour parcourire Projetcts */}
              {projects.map(p => (
                <ProjectItem key={p.id} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);
