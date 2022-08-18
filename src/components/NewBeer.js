import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMsg("");

    const requestBody = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers", requestBody)
      .then((response) => {
        //update list of projects

        //clear form
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level("");
        setContributed_by("");
        navigate("/beers");
      })
      .catch((error) => {
        setErrorMsg("oops, error creating a new project");
        console.log(error);
      });
  };

    return (
      <div className="NewBeer">

        <h3>Add a beer</h3>

        {errorMsg && <p className="error">{errorMsg}</p>}

        <form onSubmit={handleSubmit}>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Tagline :</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            alt=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>First brewed :</label>
          <input
            type="text"
            name="first_brewed"
            alt=""
            value={first_brewed}
            onChange={(e) => setFirst_brewed(e.target.value)}
          />
          <label>Brewers tips :</label>
          <input
            type="text"
            name="brewers_tips"
            alt=""
            value={first_brewed}
            onChange={(e) => setFirst_brewed(e.target.value)}
          />
          <label>Attenuation level :</label>
          <input
            type="number"
            name="attenuation_level"
            alt=""
            value={attenuation_level}
            onChange={(e) => setAttenuation_level(e.target.value)}
          />
          <label>Contribuated by :</label>
          <input
            type="text"
            name="contributed_by"
            alt=""
            value={contributed_by}
            onChange={(e) => setContributed_by(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
export default NewBeer;
