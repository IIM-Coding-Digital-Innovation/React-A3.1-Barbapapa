import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Recipe from "./Recipe"

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
        <div className="App">
            <h1>API Posts</h1>
            <div className="input">
                <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
                <button onClick={searchItem}>Search</button>
            </div>

            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {!loading &&
                <div>
                    <h3>Chargement...</h3>
                </div>
            }
            {loading &&
                <ul>
                    {data &&
                        data.results.filter(list => list.canonical_id.includes('recipe:')).map((el, i) => (
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
