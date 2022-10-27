import React from "react";

type Props = {
    score: number,
};

export default class GameScoreEntering extends React.Component<Props, { value: string }> {

    constructor(props: any) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event: any) => {
        this.setState({value: event.target.value});
    };

    handleSubmit() {
        const localStorageItems = localStorage.getItem('gaming_1.score');
        if (localStorageItems == null) {
            localStorage.setItem('gaming_1.score', JSON.stringify([{name: this.state.value, score: this.props.score}]));
        } else {
            const scoreList = JSON.parse(localStorageItems);
            scoreList.push({name: this.state.value, score: this.props.score})
            localStorage.setItem('gaming_1.score', JSON.stringify(scoreList));
        }
        window.location.href = '/score';
    }

    render() {
        return (
            <div className='score-entering-container'>
                <div className='score-entering-title'>Final score</div>
                <div className='score-entering-score'>{this.props.score}</div>
                <div className='score-entering-form-container'>
                    <input
                        className='score-entering-form-input'
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.value}
                    />
                    <button onClick={() => this.handleSubmit()} className='score-entering-form-button'>Submit</button>
                </div>
            </div>
        );
    }
}
