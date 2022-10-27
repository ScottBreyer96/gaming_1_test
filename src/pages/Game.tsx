import React, {Component} from "react";
import GameBoard from "../components/game/GameBoard";
import '../styles/game.css'

class Game extends Component {

    render() {
        return (
            <div className='game-board-container'>
                <GameBoard></GameBoard>
            </div>
        )
    }
}

export default Game;
