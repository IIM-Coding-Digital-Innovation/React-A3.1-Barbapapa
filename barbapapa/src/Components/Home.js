import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Recipe from "./Recipe"

function Home (){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (loading === false){
            fetch(`https://tasty.p.rapidapi.com/recipes/list`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'fb10d2be60msh7e23a669d9c6628p136c7fjsn40a6b3370e73',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            })
                .then((response) => response.json())
                .then((actualData) => {
                    setData(actualData);
                    setError(null);
                    setLoading(true)
                })
                .catch((err) => {
                    setError(err.message);
                    setData(null);
                })
        }

    }, []);

    return (
        <div className="App">
            <h1>API Posts</h1>
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {/*<ul>*/}
            {/*    {data2.map((element) => (*/}
            {/*        <li>{element.quantity} {element.unit} {element.ingredient}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*    {data2.map((element) => (*/}
            {/*        <li>{element.wholeLine}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {!loading &&
                <div>
                    <h3>Chargement...</h3>
                </div>
            }
            {loading &&
                <ul>
                    {data &&
                        data.results.map((el, i) => (
                        <li key={i}>
                            <Link to={`/recipe/${el.id}`}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default Home;
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