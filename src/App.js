import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Components/Loading'
import Dogs from './Components/Dogs'
import AmountDogs from './Components/AmountDogs'
import './App.css';


const url = 'https://dog.ceo/api/breeds/image/random/6'


function App() {

  const [loading, setLoading] = useState(true);
  const [dogs, setDogs]= useState([]);
  const [number, setNumber] = useState("");

//request specific amount of random dogs
useEffect(() => {
    setLoading(true)
    const getNumberDogsDogs = async (number) => {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`);
      const data = await response.json();
      setDogs(data.message);
      setLoading(false);
    }
    
    if (!number) {
      setLoading(false);
      return;
    };
    getNumberDogsDogs(number);
  }, [number]);

  //request 6 random dogs 
  useEffect(() => {
    const getAllDogs = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDogs(data.message);
    }
    getAllDogs();
  }, []);

  return (

    <div className="App">
      <h1>Random Dogs</h1>
      <AmountDogs number={setNumber} />
      {
        loading ? <Loading /> : <Dogs dogs={dogs} />
      }
    </div>
  );
}

export default App;

