import React, {useState, useEffect} from 'react'
import axios from "axios";

import CountryCard from './components/CountryCard';

const App = () => {
// GET request
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/all`
      );
      // setData(response.data);
        setData(response.data)
      setError(null);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);

const [cardDisplay, setCardDisplay] = useState(['AUS, USA, LEB'])

  return (<>
  {loading && <p>Loading...</p>}
  {data && data.map((country) => {
    return <CountryCard country={country} />
    // const {flag, cca3:code, name} = country
    // console.log(country)
    // return <p>{name.common} {flag} {code}</p>
    })}
  </>
    
  )
}

export default App