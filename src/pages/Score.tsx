import {Link} from 'react-router-dom'
import ScoreArray from "../components/score/ScoreArray";
import React, {Component} from "react";
import '../styles/score.css'

class Score extends Component {

    render() {
        return (
            <div className='home-container'>
                <div className='home-title'>SCORES</div>
                <ScoreArray></ScoreArray>
                <Link to="/game">
                    <button className='new-game-button'>New game</button>
                </Link>
            </div>)
    }
}

export default Score;
