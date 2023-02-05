import { useState, useEffect } from "react";
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
                    <ul>
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