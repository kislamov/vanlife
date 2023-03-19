import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Link} from "react-router-dom";

import "./server"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/Vans">Vans</Link>
                </nav>
            </header>
            <App/>
        </Router>
    </React.StrictMode>
);
