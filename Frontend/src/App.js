import { NavLink } from "react-router-dom";
import Router from "./Allroutes/routes";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink> /<NavLink to="/login">Login</NavLink> /
      <NavLink to="/register">Register</NavLink> /
      <NavLink to="/post">Post</NavLink>
      <Router />
    </div>
  );
}

export default App;
