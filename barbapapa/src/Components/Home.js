import React, {useEffect, useState} from 'react';
import './Home.css';
import SearchBar from './Searchbar';

const Home = ({ recipes }) => {
    return (
        <div className='home'>
            <h1>Welcome to Barbapapa !</h1>
            <p>Find a recipe to your taste</p>

            <SearchBar recipes={recipes} />

            <h2>You may like these recipes :</h2>

            <div className='recipes'>
                <div className='recipe_box'>
                    <h3>recipe title</h3>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg"} />
                    <a>View recipe</a>
                </div>

                <div className='recipe_box'>
                    <h3>recipe title</h3>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg"} />
                    <a>View recipe</a>
                </div>
                <div className='recipe_box'>
                    <h3>recipe title</h3>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg"} />
                    <a>View recipe</a>
                </div>
                <div className='recipe_box'>
                    <h3>recipe title</h3>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg"} />
                    <a>View recipe</a>
                </div>
            </div>
        </div>

    );
};

export default Home;