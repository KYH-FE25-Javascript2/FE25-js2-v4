import {
  //  Link, denna används just ni inte längre eftersom vi använder NavLink
  NavLink,
} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        // className={({ isActive, isPending }) =>
        //   isPending ? "pending" : isActive ? "active" : ""
        // }
        // Detta får man gratis av NavLink, lägg bara till css, men se till att ha rätt css namn.
      >
        Home
      </NavLink>
      <br></br>
      <NavLink to="/about">About</NavLink>
      <br></br>
      <NavLink
        to="/users"
        // end propen? vad är det?
        end
      >
        Users
      </NavLink>
      {/* <a href="/about">About</a> */}
    </nav>
  );
}

export default Navigation;
