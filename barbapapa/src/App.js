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
import Recipe from "./Components/Recipe";
import Saved from "./Components/Saved";
import List from "./Components/List";


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
                            <Link to="/saved">Saved</Link>

                        </li>
                        <li>
                            <Link to="/list">Shopping list</Link>

                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route exact path='/' element={< Home/>}/>
                    <Route exact path='/saved' element={< Saved/>}/>
                    <Route exact path='/list' element={< List/>}/>
                    <Route exact path='/recipe/:recipeId' element={< Recipe/>}/>
                </Routes>

            </Router>
        );
    }
}

export default App;