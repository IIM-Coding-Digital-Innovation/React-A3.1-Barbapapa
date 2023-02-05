import { useState, useEffect } from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import {Component} from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Recipe from "./Components/Recipe";
import Saved from "./Components/Saved";
import Groceries from "./Components/Groceries";


class App extends Component {
    render() {
        return (
            <Router>

                <div className="App">
                    <ul className="Nav">
                        <li>
                            <Link to="/">Home</Link>

                        </li>
                        <li>
                            <Link to="/about">About Us</Link>

                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>

                        </li>
                        <li>
                            <Link to="/saved">Saved</Link>

                        </li>
                        <li>
                            <Link to="/groceries">Shopping list</Link>

                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route exact path='/' element={< Home/>}/>
                    <Route exact path='/about' element={< About/>}/>
                    <Route exact path='/contact' element={< Contact/>}/>
                    <Route exact path='/saved' element={< Saved/>}/>
                    <Route exact path='/groceries' element={< Groceries/>}/>
                    <Route exact path='/recipe/:recipeId' element={< Recipe/>}/>
                </Routes>

            </Router>
        );
    }
}

export default App

// export default function App() {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     fetch(`https://yummly2.p.rapidapi.com/feeds/list?limit=25&start=0`, {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'fb10d2be60msh7e23a669d9c6628p136c7fjsn40a6b3370e73',
    //             'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((actualData) => {
    //             setData(actualData);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setData(null);
    //         })
    //
    // }, []);

    // console.log(data)
    // // let data2 = data.feed[0].content.ingredientLines
    // let data3 = data.feed
    // console.log(data3)

    // return (
    //     <div className="App">
    //         <h1>API Posts</h1>
    //         {error && (
    //             <div>{`There is a problem fetching the post data - ${error}`}</div>
    //         )}
    //         {/*<ul>*/}
    //         {/*    {data2.map((element) => (*/}
    //         {/*        <li>{element.quantity} {element.unit} {element.ingredient}</li>*/}
    //         {/*    ))}*/}
    //         {/*</ul>*/}
    //         {/*<ul>*/}
    //         {/*    {data2.map((element) => (*/}
    //         {/*        <li>{element.wholeLine}</li>*/}
    //         {/*    ))}*/}
    //         {/*</ul>*/}
    //         {/*<ul>*/}
    //         {/*    {data3.filter(l => l.type.includes('single recipe')).map((el, i) => (*/}
    //         {/*        <li key={i}>{el.display.displayName}</li>*/}
    //         {/*    ))}*/}
    //         {/*</ul>*/}
    //
    //     </div>
    // );
// }
