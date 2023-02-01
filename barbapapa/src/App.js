import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import {Component} from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";


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
                    </ul>
                </div>

                <Routes>
                    <Route exact path='/' element={< Home/>}/>
                    <Route exact path='/about' element={< About/>}/>
                    <Route exact path='/contact' element={< Contact/>}/>
                </Routes>

            </Router>
        );
    }
}

export default App