// src/App.js
import React from 'react';
import UserInputForm from './components/UserInputForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import ShowUsers from './components/showUser/ShowUsers';

function App() {
return (
  <Router>
  <Routes>
    <Route path='/' element={ <UserInputForm/> } />
    <Route path='/users' element={ <ShowUsers/> } />
    </Routes> 
    </Router>
  );
}

export default App;
    