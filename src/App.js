import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProject from "./components/projet/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
