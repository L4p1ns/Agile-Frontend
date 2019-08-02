import React, { Component } from "react";
import ProjectItem from "./projet/ProjectItem";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projet</h1>
              <br />
              <a className="btn btn-lg btn-info">Creer un projet</a>
              <br />
              <hr />
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
