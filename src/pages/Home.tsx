import {Link} from 'react-router-dom'
import RankingArray from "../components/ranking/Ranking-array";
import React, {Component} from "react";
import '../styles/home.css'

class Home extends Component {

    render() {
        return (
            <div className='home-container'>
                <div className='home-title'>SCORES</div>
                <RankingArray></RankingArray>
                <Link to="/game">
                    <button className='new-game-button'>New game</button>
                </Link>
            </div>)
    }
}

export default Home;
