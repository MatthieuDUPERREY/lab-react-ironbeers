import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="ApartementList">
      <Link to="/beers">
        <h3>All Beers</h3>
      </Link>
      <Link to="/random-beer">
        <h3>Choose a random beer</h3>
      </Link>
      <Link to="/new-beer">
        <h3>Add a beer</h3>

      </Link>
    </div>
  );
}

export default HomePage;
