import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (

        <section className='container'>

            <div>
                <h3>Your favorite food, delived while coding.</h3>
                <Link to='/pizza'>
                    <button>Pizza</button>
                </Link>
            </div>

            <div>
                <h6>Food Deliver in Gotham City</h6>
                <div>
                    <img alt='food' src='https://picsum.photos/300/200' />
                    <h8>McDonald's</h8>
                    <p>American - Fast Food - Burgers</p>
                    <button>20-30 mins</button>
                    <button>$5.99 Deliver Fee</button>
                </div>

                <div>
                    <img alt='food' src='https:picsum.photos/300/200' />
                    <h8>Sweet Green</h8>
                    <p>Healthy - Salads</p>
                    <button>30-45 mins</button>
                    <button>$4.99 Delivery Fee</button>
                </div>

                <div>
                    <img alt='food' src='https://picsum.photos/300/200' />
                    <h8>Starbucks</h8>
                    <p>Cafe - Coffee and Tea - Breakfast and Lunch</p>
                    <button>10-20 mins</button>
                    <button>$3.99 Delivery Fee</button>
                </div>
                
            </div>

        </section>

    )

}

export default HomePage