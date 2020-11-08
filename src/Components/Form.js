import React from 'react';

const Form = (props) => {

    const {

        onInputChange,
        onInputChange2,
        onCheckboxChange,
        onCheckboxChange2,
        formValues,
        formErrors,
        onSubmit

    } = props

    return (

        <form onSubmit = {onSubmit}>

            <section className='form-head'>

                <h5>Build Your Own Pizza!</h5>
                <img alt='food' />

            </section>

            <section className='name'>

                <h4>Enter Name Here: </h4>
                <p>{formErrors.name ? formErrors.name : ''}</p>
                <input 
                    className='name-input' 
                    name='name' 
                    type='text' 
                    onChange={onInputChange}
                     />

            </section>

            <section>

                <label>
                    Size: 
                </label>
                <select 
                        name='size' 
                        onChange={onInputChange2}
                >
                    <option name='size'>Size</option>
                    <option name='personal'>Personal</option>
                    <option name='small'>Small</option>
                    <option name='medium'>Medium</option>
                    <option name='large'>Large</option>
                    <option name='extralarge'>Extra Large</option>
                </select>
                        
            </section>

            <section className='sauce'>

                <p>Choice of Sauce</p>
                
                <label>
                    Original Red
                    <input 
                        name='originalred' 
                        type='checkbox' 
                        onClick={onCheckboxChange2}
                     />
                </label>

                <label>
                    Garlic Ranch
                    <input 
                        name='garlicranch' 
                        type='checkbox' 
                        onClick={onCheckboxChange2}
                     />
                </label>

                <label>
                    Barbecue
                    <input 
                        name='barbecue' 
                        type='checkbox' 
                        onClick={onCheckboxChange2}
                     />
                </label>

                <label>
                    Spinach Alfredo
                    <input 
                        name='spinachalfredo' 
                        type='checkbox' 
                        onClick={onCheckboxChange2}
                     />
                </label>

            </section>

            <section className='toppings'>

                <p>Add Toppings</p>
                <p>Choose up to 10</p>

                <label>
                    Pepperoni
                    <input name='pepperoni' type='checkbox' value='pepperoni' onClick={onCheckboxChange} />
                </label>

                <label>
                    Sausage
                    <input name='sausage' type='checkbox' value='sausage' onClick={onCheckboxChange} />
                </label>

                <label>
                    Canadian Bacon
                    <input name='canadianbacon' type='checkbox' value='canadianbacon' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Spicy Italian Sausage
                    <input name='spicyitaliansausage' type='checkbox' value='spicyitaliansausage' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Grilled Chicken
                    <input name='grilledchicken' type='checkbox' value='grilledchicken' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Onions
                    <input name='onions' type='checkbox' value='onions' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Green Pepper
                    <input name='greenpepper' type='checkbox' value='greenpepper' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Diced Tomatoes
                    <input name='dicedtomato' type='checkbox' value='dicedtomato' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Black Olives
                    <input name='blackolives' type='checkbox' value='blackolives' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Roasted Garlic
                    <input name='roastedgarlic' type='checkbox' value='roastedgarlic' onClick={onCheckboxChange} />
                </label>

                <label>
                    Artichoke Hearts
                    <input name='artichokehearts' type='checkbox' value='artichokehearts' onClick={onCheckboxChange} />
                </label>

                <label>
                    Three Cheese
                    <input name='threecheese' type='checkbox' value='threecheese' onClick={onCheckboxChange} />
                </label>

                <label>
                    Pineapple
                    <input name='pineapple' type='checkbox' value='pineapple' onClick={onCheckboxChange}/>
                </label>

                <label>
                    Extra Cheese
                    <input name='xtracheese' type='checkbox' value='xtracheese' onClick={onCheckboxChange} />
                </label>

            </section>

            <section className='special-instructions'>

                <label>
                    Special Instructions
                    <input name='specialInstructions' type='text' onChange={onInputChange2}/>
                </label>

            </section>

            <section className='quantity'>

                <label>
                    Quantity
                    <select name='quantity' onChange={onInputChange2}>
                        <option name='1'>1</option>
                        <option name='2'>2</option>
                        <option name='3'>3</option>
                        <option name='4'>4</option>
                        <option name='5'>5</option>
                        <option name='6'>6</option>
                        <option name='7'>7</option>
                        <option name='8'>8</option>
                        <option name='9'>9</option>
                        <option name='10'>10</option>
                    </select>
                </label>

                <button onClick={onSubmit}>Add to order.</button>
                
            </section>

        </form>
    )

}

export default Form