import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/about">About</Link>
      {/* <a href="/about">About</a> */}
    </nav>
  );
}

export default Navigation;
