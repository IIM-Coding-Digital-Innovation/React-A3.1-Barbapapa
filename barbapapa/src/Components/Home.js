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
            <p>Find a recipe to your taste</p>

            <SearchBar />

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

// const Home = ({ recipes }) => {
//     return (
//         <div className='home'>
//             <h1>Welcome to Barbapapa !</h1>
//             <p>Find a recipe to your taste</p>

//             <SearchBar recipes={recipes} />

//             <h2>You may like these recipes :</h2>

//             <div className='recipes'>
//                 <div className='recipe_box'>
//                     <h3>recipe title</h3>
//                     <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg"} />
//                     <a>View recipe</a>
//                 </div>

//             </div>
//         </div>

//     );
};

export default Home;