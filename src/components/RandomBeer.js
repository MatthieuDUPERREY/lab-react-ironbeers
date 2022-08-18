import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RandomBeer() {
  const { beerId } = useParams();

  const [beer, setDetails] = useState(null);


  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log("error getting apartment details from API", e));
  }, []);

  const renderDetails = () => {
  return (
    <>
      <img src={beer.image_url} alt="" />
      <h3>{beer.name}</h3>
      <h3>{beer.tagline}</h3>
      <h3>{beer.first_brewed}</h3>
      <h3>{beer.attenuation_level}</h3>
      <h3>{beer.description}</h3>
    </>
  );
};


  return (
   <section className="BeerDetails">
      <h1>Beer Details</h1>

      {beer === null ? <p>loading...</p> : renderDetails()}

      <p>
        <Link to="/beers">Back</Link>
      </p>
    </section>
  );
}

export default RandomBeer;
