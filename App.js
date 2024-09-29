import { useReducer } from "react";
import { initialState, postReducer } from "../src/reducer/reducer";
import { ACTION_TYPES } from "./constants/constants";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const fetchPost = async () => {
    try {
      dispatch({ type: ACTION_TYPES.FETCH_LOADING });
      const res = await fetch("https://jsonplaceholder.typicode.co/posts/1");
      const data = await res.json();
      dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR });
    }
  };

  const loadSpinner = () => {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };
  return (
    <div className="App">
      <center>
        <h1>USE REDUCER PRACTICE</h1>
        <p>{state.isLoading && loadSpinner()}</p>
        <p className="post">{state.post.title}</p>
        <button onClick={fetchPost}>FETCH</button>
        <p className="error_msg">{state.error && "Error finding post"}</p>
      </center>
    </div>
  );
}

export default App;
