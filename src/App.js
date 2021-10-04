import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Components/Loading'
import Dogs from './Components/Dogs'
import AmountDogs from './Components/AmountDogs'
import Button from 'react-bootstrap/Button'
import './App.css';


const url = 'https://dog.ceo/api/breeds/image/random/1'


function App() {

  const [loading, setLoading] = useState(true);
  const [dogs, setDogs]= useState([]);
  const [number, setNumber] = useState(6);
  const [counter, setCounter] = useState(6);
  const incrementCounter = () => setNumber(number + 1);
  const decrementCounter = () => setNumber(number - 1);

  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }

useEffect(() => {
    setLoading(true)
    const getNumberDogs = async (number) => {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`);
      const data = await response.json();
      setDogs(data.message);
      setLoading(false);
    }
    
    if (!number) {
      setLoading(false);
      return;
    };
    getNumberDogs(number);
  }, [number]);

 

  return (

    <div className="App">
      <h1>Random Dogs</h1>
    

      <div className='dog-buttons'>
        <Button variant="dark" className='btn-dog' onClick={()=> setNumber(number + 1)}>1 more dog</Button>
        <Button variant="dark" className='btn-dog'  onClick={()=> setNumber(number - 1)}>1 less dog</Button>
        <Button variant="dark" className='btn-dog'  onClick={()=> setNumber(number + 5)}>5 more dogs</Button>
        <Button variant="dark" className='btn-dog'  onClick={()=> setNumber(number - 5)}>5 less dogs</Button>
      </div>
     
      {
        loading ? <Loading /> : <Dogs dogs={dogs}  /> 
      }
    </div>
  );
}

export default App;

