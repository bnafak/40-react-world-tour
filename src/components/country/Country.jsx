import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

    //const passWithParams =()=> handleVisitedCountry(country);
  
  // console.log(handleVisitedCountry)
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name : {name?.common} </h3>
      <img src={flags.png} alt="" />
      <h3>Population : {population}</h3>
      <h3>Area : {area}</h3>
      <h3>Code : {cca3}</h3>

      <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>

      <br />

      <button onClick={handleVisited}>Visited</button>

      {visited ? " I have visited this country." : "I want to visit"}
    </div>
  );
};

export default Country;
