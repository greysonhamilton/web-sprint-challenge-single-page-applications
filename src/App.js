import React from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './Components/formSchema';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Form from './Components/Form';

const initialOrder = {

  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    canadianbacon: false,
    spicyitaliansausage: false,
    grilledchicken: false,
    onions: false,
    greenPepper: false,
    dicedtomato: false,
    blackolives: false,
    roastedgarlic: false,
    artichokehearts: false,
    threecheese: false,
    pineapple: false,
    xtracheese: false
  },
  specialInstructions: '',
  quantity: '',
};

const App = () => {

  
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
