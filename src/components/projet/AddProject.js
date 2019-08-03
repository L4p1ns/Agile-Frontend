import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/ProjectActions";
import classnames from "classnames";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      code: "",
      description: "",
      dateDebut: "",
      dateFin: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 // Life cycle hooks
 componentWillReceiveProps(nextProps) {
  if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    });
  }
}
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const newProject = {
      nom: this.state.nom,
      code: this.state.code,
      description: this.state.description,
      dateDebut: this.state.dateDebut,
      dateFin: this.state.dateFin
    };
    // console.log(newProject);
    this.props.createProject(newProject, this.props.history);
  };


  render() {
    return (
      <div className="project">
        {
          // Check name attribute input fields
          // Create constructor
          // Set state
          // Set value on input fields
          // Create onChange function
          // Set onChange on each input field
          // Bind on constructor
          // Check state change in the react extension
        }
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Creer / Editer Projet</h5>
              <hr />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="nom"
                    value={this.state.nom}
                    onChange={this.onChange}
                    className="form-control form-control-lg "
                    placeholder="Nom du projet"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="code"
                    value={this.state.code}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    placeholder="Code du projet"
                  />
                </div>
                {
                  // <!-- disabled for Edit Only!! remove "disabled" for the Create operation -->
                }
                <div className="form-group">
                  <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    placeholder="Description du projet"
                  />
                </div>
                <h6>Date debut</h6>
                <div className="form-group">
                  <input
                    type="date"
                    name="dateDebut"
                    value={this.state.dateDebut}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <h6>Date Fin Estimative</h6>
                <div className="form-group">
                  <input
                    type="date"
                    name="dateFin"
                    value={this.state.dateFin}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                  />
                </div>

                <button
                  onClick={this.onSubmit}
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
AddProject.propTypes = {
  createProject: PropTypes.func.isRequired
};
export default connect(
  null,
  { createProject }
)(AddProject);
