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
        <div className="App">
            <h1>API Recipe</h1>
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
                        data.instructions.map((el, i) => (
                            <li key={i}>
                                {el.display_text}
                            </li>
                        ))}
                </ul>
            }
            <Routes>
                <Route exact path='/recipe' element={< Recipe />}></Route>
            </Routes>
        </div>
    );
}

export default Recipe;
