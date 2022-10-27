import ReactDOM from "react-dom/client";
import React from 'react'
import Game from './pages/Game'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="game" element={<Game/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
