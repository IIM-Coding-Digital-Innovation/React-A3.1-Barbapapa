import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import './Home.css';

function Home (){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [item, setItem] = useState("");

    const searchItem = () => {
        fetch(`https://tasty.p.rapidapi.com/recipes/list?q=${item}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '415a4867edmsh0c7c38867940a83p184fcejsn73b56f074c1d',
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
                    'X-RapidAPI-Key': '415a4867edmsh0c7c38867940a83p184fcejsn73b56f074c1d',
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

            <h2>Find a recipe base of your main ingredient</h2>

            <div className="input">
                <input type='text' name='search' value={item} onChange={(e) => setItem(e.target.value)} aria-label="Search for a recipe" />
                <button onClick={searchItem}>Search</button>
            </div>
            <h2>You may like these recipes :</h2>

            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {!loading &&
                <div>
                    <iframe src="https://giphy.com/embed/Pqf31C9P1AuIg" width="480" height="360" frameBorder="0"
                            className="giphy-embed" title='loading' allowFullScreen></iframe>
                </div>
            }
            {loading &&
                <ul className='recipes'>
                    {data &&
                        data.results.map((el, i) => (
                        <li className='recipe_box' key={i}>
                            <img src={el.thumbnail_url} loading="lazy" alt='{el.name}' />
                            <p>{el.name}</p>
                            <Link to={`/recipe/${el.id}`}>View recipe</Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default Home;