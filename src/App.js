import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Components/Forms';
import People from './Components/usersList';

function App() {
  const [people,setPeople] = useState([
    {
      id:1,
      name:"",
      email:"",
      role:""
    }
  ]);
  const addNewUser = user =>{
    const newUser ={
      id: Date.now(),
      name: user.name,
      email: user.email,
      role: user.role
    };
    setPeople([...people, newUser]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Forms addNewUser = {addNewUser}/> 
        <People people = {people}/>       
      </header>
    </div>
  );
}

export default App;
