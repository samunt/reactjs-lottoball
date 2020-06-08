import React, {Component} from 'react';
import './Coin.css';
class Coin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Coin">
                <p>{this.props.side === 1 ? 'Heads' : 'Tails'}</p>
            </div>
        )
    }
}
export default Coin;
