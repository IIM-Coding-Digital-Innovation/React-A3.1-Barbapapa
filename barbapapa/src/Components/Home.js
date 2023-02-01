import React, {useEffect, useState} from 'react';

function Home (){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {
        if (loading === false){
            fetch(`https://yummly2.p.rapidapi.com/feeds/list?limit=25&start=0`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '415a4867edmsh0c7c38867940a83p184fcejsn73b56f074c1d',
                    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
                }
            })
                .then((response) => response.json())
                .then((actualData) => {
                    setData(actualData);
                    console.log(data)
                    console.log(actualData)
                    setLoading(true)
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setData(null);
                })
        }


    }, []);

    // let data2 = data.feed;



    return (
        <div className="App">
            <h1>API Posts</h1>
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
            {/*<ul>*/}
            {/*    {data3.filter(l => l.type.includes('single recipe')).map((el, i) => (*/}
            {/*        <li key={i}>{el.display.displayName}</li>*/}
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
                data?.feed.filter(l => l.type.includes('single recipe')).map((el, i) => (
                    <li key={i}>
                        {el.display.displayName}
                    </li>
                ))}
            </ul>
            }



        </div>
    );
}

export default Home;