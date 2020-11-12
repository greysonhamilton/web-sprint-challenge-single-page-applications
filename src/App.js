import React from "react";
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Form from './Components/Form';

const App = (props) => {

  return (
    <div>

      <Header />
      <Route exact path='/' render = {props => <HomePage {...props} />} />
      <Route path='/pizza' render = {props => 
        <Form {...props} />}
         />
    
    </div>

  );

};

export default App;
