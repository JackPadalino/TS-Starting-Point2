import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div id="Nav-div">
      <Link to="/">Home</Link>
      <Link to="/artists">Artists</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/songs">Songs</Link>
    </div>
  );
};

export default Nav;
