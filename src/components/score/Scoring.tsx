import React from "react";
import User from "../../interfaces/User";

type Props = {
    user: User,
};

export default class Scoring extends React.Component<Props>{

    render() {
        return (
            <div className='scoring-user-container'>
                <div className='scoring-user-name'>{this.props.user.name}</div>
                <div className='scoring-user-score'>{this.props.user.score}</div>
            </div>
        );
    }
}




