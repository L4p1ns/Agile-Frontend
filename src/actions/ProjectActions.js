import axios from 'axios';
import { GET_ERRORS, GET_PROJECTS } from './Types';

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post('http://127.0.0.1:8080/api/projet', project);
    history.push('/dashboard');
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  const res = await axios.get('http://127.0.0.1:8080/api/projet/all');
  dispatch({
    type: GET_PROJECTS,
    payload: res.data
  });
};

// http://127.0.0.1:8080/api/projet/all
