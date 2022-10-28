import React from "react";
import {Component} from "react";
import Target from "../../interfaces/Target";
import '../../styles/game.css'
import GameScoreEntering from "./GameScoreEntering";

class GameBoard extends Component {

    score: number = 0;
    isEndGame = false;
    targets: Target[] = [
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false}
    ];

    constructor(props: any) {
        super(props);
        this.targets.forEach(target => {
            this.initTargetVisibleTimer(target)
        });
        this.initGameTimer();
    }

    targetClicked(target: Target) {
        if (target.visible) {
            this.score = this.score + 10;
            target.visible = false;
            this.initTargetVisibleTimer(target);
            this.setState({state: this.state});
        }
    }

    initGameTimer() {
        setTimeout(() => {
            this.isEndGame = true;
        }, 120000)
    }

    initTargetVisibleTimer(target: Target) {
        const min = Math.ceil(1000);
        const max = Math.floor(5000);
        const timer = Math.floor(Math.random() * (max - min) + min);

        setTimeout(() => {
            if (!target.visible) {
                target.visible = true;
                this.initTargetHiddenTimer(target)
                this.setState({state: this.state});
            }
        }, timer)
    }

    initTargetHiddenTimer(target: Target) {
        setTimeout(() => {
            if (target.visible) {
                target.visible = false;
                this.initTargetVisibleTimer(target)
                this.setState({state: this.state});
            }
        }, 2000)
    }

    renderTargets() {
        return this.targets.map((target) => (
            <div className='target-container'>
                <img className={target.visible ? 'visible-target' : 'hidden-target'} onClick={() => this.targetClicked(target)}></img>
            </div>
        ));
    }

    render() {
        return (
            this.isEndGame ?
                <GameScoreEntering score={this.score}></GameScoreEntering>
                :
                <div>
                    <div className='score-container'>
                        <div className='score-title'>
                            Score
                        </div>
                        <div className='score-value'>
                            {this.score}
                        </div>
                    </div>
                    <div className='game-board'>
                        {this.renderTargets()}
                    </div>
                </div>

        )
    }
}

export default GameBoard;

