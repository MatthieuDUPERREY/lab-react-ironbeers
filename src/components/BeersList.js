import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BeersList() {

  const[listOfBeers, setBeers] = useState([]);
  const getBeers = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        const oneBeer = response.data;
        console.log(oneBeer);
        setBeers([...oneBeer]);
        console.log(listOfBeers);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getBeers();
  }, []);
  return (
    <div className="BeersList">
      {listOfBeers.map((beer) => {
        return (
          <div className="BeerCard card" key={beer._id}>
            <Link to={`${beer._id}`}>
              <img src={beer.image_url} alt="" />
              <h3>{beer.name}</h3>
              <h3>{beer.tagline}</h3>
              <h3>{beer.contributed_by}</h3>

            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
