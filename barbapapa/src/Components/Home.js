import React, {useEffect, useState} from 'react';

function Home (){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://yummly2.p.rapidapi.com/feeds/list?limit=25&start=0`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fb10d2be60msh7e23a669d9c6628p136c7fjsn40a6b3370e73',
                'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
            }
        })
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })

    }, []);

    console.log(data)
// let data2 = data.feed[0].content.ingredientLines
    let data3 = data.feed
    console.log(data3)

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
            <ul>
                {data3.filter(l => l.type.includes('single recipe')).map((el, i) => (
                    <li key={i}>{el.display.displayName}</li>
                ))}
            </ul>

        </div>
    );
}

export default Home;
