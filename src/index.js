import ReactDOM from "react-dom/client";
import React from 'react'
import Game from './pages/Game'
import Score from './pages/Score'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Score/>}/>
                <Route path="/score" element={<Score/>}/>
                <Route path="game" element={<Game/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
