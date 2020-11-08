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

            <section className='toppings'>

                <p>Add Toppings</p>
                <p>Choose up to 10</p>

                <label>
                    Pepperoni
                    <input name='pepperoni' type='checkbox' value='pepperoni' onClick={onCheckboxChange} />
                </label>
                <label>
                    Canadian Bacon
                    <input name='canadianBacon' type='checkbox' value='canadian-bacon' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Spicy Italian Sausage
                    <input name='spicyItalianSausage' type='checkbox' value='spicy-italian-sausage' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Grilled Chicken
                    <input name='grilledChicken' type='checkbox' value='grilled-chicken' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Onions
                    <input name='onions' type='checkbox' value='onions' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Green Pepper
                    <input name='greenPepper' type='checkbox' value='green-pepper' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Diced Tomatoes
                    <input name='dicedTomatoes' type='checkbox' value='diced-tomatoes' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Black Olives
                    <input name='blackOlives' type='checkbox' value='black-olives' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Pineapple
                    <input name='pineapple' type='checkbox' value='pineapple' onClick={onCheckboxChange}/>
                </label>

            </section>

            <section className='special-instructions'>

                <label>
                    Special Instructions
                    <input name='specialInstructions' type='text' onChange={onInputChange2}/>
                </label>

            </section>

        </form>
    )

}

export default Form