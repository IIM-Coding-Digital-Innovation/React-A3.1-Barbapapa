import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Recipe from "./Recipe"
import SearchBar from './Searchbar';

function Home (){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [item, setItem] = useState("");

    const searchItem = () => {
        fetch(`https://tasty.p.rapidapi.com/recipes/list?q=${item}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '87d119cf7cmsh0b635d3245ed007p1fbe7ajsn44560d0d6180',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        })
            .then((response) => response.json())
            .then((researchedData) => {
                setData(researchedData);
                setError(null);
                setLoading(true)
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
    };

    useEffect(() => {
        if (loading === false){
            fetch(`https://tasty.p.rapidapi.com/recipes/list`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '87d119cf7cmsh0b635d3245ed007p1fbe7ajsn44560d0d6180',
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
        <div className="App home">
            <h1>Welcome to Barbapapa !</h1>
            <p>Find a recipe to your taste</p>
            <div className="input">
                <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
                <button onClick={searchItem}>Search</button>
            </div>
            <h2>You may like these recipes :</h2>

            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {!loading &&
                <div>
                    <h3>Loading...</h3>
                </div>
            }
            {loading &&
                <div className='recipes'>
                    {data &&
                        data.results.map((el, i) => (
                        <div className='recipe_box' key={i}>
                            <img src={el.thumbnail_url} alt='{el.name}' />
                            <h3>{el.name}</h3>
                            <Link to={`/recipe/${el.id}`}>View recipe</Link>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default Home;