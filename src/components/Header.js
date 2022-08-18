import { Link } from "react-router-dom";

function Header() {
  return (
      <header>
        <Link to="/">
          <h3>Back home</h3>
        </Link>
      </header>
  );
}

export default Header;
