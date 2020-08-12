import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fullname from'./compenement/fullname';
import Adress from './compenement/adress';
import Profile from './compenement/profilephoto';
function App() {
  return (<>
  <div className="body">
  <div className="box">
   <Profile />
  <Fullname nom="marwen" prenom="selmi"/>
  <Adress />
  </div>
  </div>
  </>
  );
}

export default App;
