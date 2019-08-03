import axios from "axios";
import { GET_ERRORS } from "./Types";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("http://127.0.0.1:8080/api/projet", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
