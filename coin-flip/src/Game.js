import React, {Component} from 'react';
import Coin from "./Coin";

class Game extends Component {
    constructor(props) {
        super(props)
        this.flip = this.flip.bind(this);
        this.state = {
            side: 1,
            heads: 0,
            tails: 0,
            total: 0
        }
    }
    changeSide(currState) {
        console.log(currState)
        const flipResult = Math.floor(Math.random() * 2) + 1;
        return {
            side: flipResult,
            total: currState.total + 1,
            heads: flipResult === 1 ? currState.heads + 1 : currState.heads,
            tails: flipResult === 2 ? currState.tails + 1 : currState.tails
        }
    }

    flip() {
        this.setState(this.changeSide);
    }
    render() {
        return (
            <div>
                <Coin side={this.state.side}/>
                <h1>Heads: {this.state.heads}</h1>
                <h1>Tails: {this.state.tails}</h1>
                <h1>Total flips: {this.state.total}</h1>
                <button onClick={this.flip}>FLIP</button>

            </div>
        )
    }
}
export default Game;
