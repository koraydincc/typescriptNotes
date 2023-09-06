import React from 'react';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';

function App() {

  const instructor = {
    firstName:'Koray',
    lastName:'Dinç'
  }

  const instructorList = [{
    firstName:'Koray',
    lastName:'Dinç'
  },
  {
    firstName:'Zeynep',
    lastName:'Dinç'
  }
]

  return (
    <div className="App">
      <Home name="Koray Dinç" age={24} isBest={true} />
      <Instructor instructorNameLastName={instructor}></Instructor>
      <InstructorList instructorNameLastNameList={instructorList}></InstructorList>
      <Request status='success'></Request>
    </div>
  );
}

export default App;
