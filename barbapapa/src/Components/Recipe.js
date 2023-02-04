import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";

function Recipe (){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let { recipeId } = useParams();
    console.log(useParams())
    console.log('test')
    useEffect(() => {

        if (loading === false){
            fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipeId}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'fb10d2be60msh7e23a669d9c6628p136c7fjsn40a6b3370e73',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            })
                .then((response) => response.json())
                .then((actualData) => {
                    console.log(actualData)
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
        <div className="RecipeCard">
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            
            {!loading &&
                <div>
                    <h3>Loading...</h3>
                </div>
            }

            {loading &&
                <div>
                    <h1>{data.name}</h1>
                    <img src={data.thumbnail_url} alt={data.name} />
                </div>
            }

            {loading &&
                <ul>
                    {data &&
                        data.sections.map((el, i) => (
                            el.components.map((l, j) => (
                                <li key={j}>
                                    {l.raw_text}
                                </li>
                            ))
                        ))}
                </ul>
            }

            {loading &&

                <div>
                    <div className='RecipeCard'>
                        {data &&
                            data.instructions.map((el, i) => (
                                <div key={i}>
                                    {el.display_text}
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            <Routes>
                <Route exact path='/recipe' element={< Recipe />}></Route>
            </Routes>
        </div>
    );
}

export default Recipe;
