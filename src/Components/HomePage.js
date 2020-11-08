import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (

        <section className='container'>
            <h3>Your favorite food, delived while coding.</h3>
            <Link to='/pizza'>
                <button>Pizza</button>
            </Link>

        </section>

    )

}

export default HomePage