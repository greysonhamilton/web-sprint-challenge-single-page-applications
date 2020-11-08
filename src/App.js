import React, { useEffect } from "react";
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
  sauce: {

    origianred: false,
    garlicranch: false,
    barbecuesauce: false,
    spinachalfredo: false,

  },

  toppings: {

    pepperoni: false,
    sausage: false,
    canadianbacon: false,
    spicyitaliansausage: false,
    grilledchicken: false,
    onions: false,
    greenpepper: false,
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

  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialOrder);
  const [formErrors, setFormErrors] = useState(initialOrder);
  const [disabled, setDisabled] = useState(true);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/pizza', newOrder)

    .then((res) => {
      debugger
      console.log(res.data)
      setOrder([...order, res.data])
    })

    .catch ((err) => {
      debugger
      console.log(err)
    })

    .finally(() => {
      setFormValues(initialOrder)
    })

  }

  const onCheckboxChange = (e) => {

    const { name, checked } = e.target;
    setFormValues({...formValues,
      toppings: {...formValues.toppings,
        [name]: checked,}})

  }

  const onCheckboxChange2 = (e) => {

    const { name, checked } = e.target;
    setFormValues({...formValues,
      sauce: {...formValues.sauce,
        [name]: checked,}})

  }

  const onInputChange = (e) => {

    const { name, value } = e.target;

    yup.reach(formSchema, name)
    .validate(value)
    .then((valid) => {
      console.log(valid);
      setFormErrors({...formErrors,
        [name]: ""})
    })

    .catch((err) => {
      setFormErrors({...formErrors,
        [name]: err.errors[0]})
    })

    setFormValues({...formValues, [name]: value});

  }

  const onInputChange2 = (e) => {

    const {name, value } = e.target;
    setFormValues({...formValues, [name]: value});

  }
  
  const onSubmit = (e) => {
    
    e.preventDefault()
    debugger
    const newOrder = {

      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: Object.keys(formValues.sauce)
        .filter(sauceName => (formValues.sauce[sauceName] === true)),
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true)),
      specialInstructions: formValues.specialInstructions.trim(),
      quantity: formValues.quantity,

    };

    postNewOrder(newOrder)
  
  };

  useEffect(() => {

    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })

  }, [formValues]);

  return (
    <div>

      <Header />
      <Route exact path='/' render = {props => <HomePage {...props} />} />
      <Route path='/pizza' render = {props => 
        <Form {...props} onSubmit = {onSubmit} onInputChange = {onInputChange} 
        onInputChange2 = {onInputChange2} onCheckboxChange = {onCheckboxChange} 
        disabled = {disabled} formValues = {formValues} formErrors = {formErrors} />}
         />
    
    </div>

  );

};

export default App;
