import React from "react";
import {Component} from "react";
import Scoring from "./Scoring";
import User from "../../interfaces/User";

class RankingArray extends Component {

    users: User[] = [];

    constructor(props: any) {
        super(props);
        this.getScores();
    }

    getScores() {
        const datas = localStorage.getItem('gaming_1.score');
        if (datas) {
            this.users = JSON.parse(datas);
            this.sortUsers();
            this.users.splice(10, this.users.length);
        }
    }

    sortUsers() {
        this.users.sort((a, b) => b.score - a.score)
    }

    renderUser() {
        this.sortUsers();
        return this.users.map((user, index) => (
                <Scoring user={user} key={index}/>
        ));
    }

    render() {
        return (
            <div className='ranking-array-container'>
                {this.renderUser()}
            </div>
        )
    }
}

export default RankingArray;

