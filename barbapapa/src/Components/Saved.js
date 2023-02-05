import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function Saved () {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let { recipeId } = useParams();


    const localData = localStorage.getItem('data');

    if (localData) {
        setData(JSON.parse(localData));
        return;
    }
    // useEffect(() => {
        if (loading === false){
            fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipeId}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '415a4867edmsh0c7c38867940a83p184fcejsn73b56f074c1d',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            })
                .then((response) => response.json())
                .then(data => {
                    setData(data);
                    setError(null);
                    setLoading(true);
                    localStorage.setItem('data', JSON.stringify(data));

                })
                .catch((err) => {
                    setError(err.message);
                    setData(null);
                });
        }

    // }, [data]);
    //
    // const DataPage = ({ data }) => {
    //     return (
    //         <div>
    //             {data.map(item => (
    //                 <div key={item.id}>{item.name}</div>
    //             ))}
    //         </div>
    //     );
    // };



    return (

    <div>
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
            data.sections.map((el, i) => (
                el.components.map((l, j) => (
                    <li key={j}>
                        {l.raw_text}
                    </li>
                ))
            ))}
        </ul>
        }
    </div>
    )

}
export default Saved;
