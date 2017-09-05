import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';

class Board extends React.Component {
    render() {
        return (
            <div>
                <div className="board-row">
                    cxvxccv
                </div>
            </div>
        );
    }
}

class GameInfo extends Component {
    render() {
        return(
            <div className="game-info">
                <h2>
                    <span>
                        Round:
                    </span>
                    <span>1</span>
                </h2>
                <button className="button button--warning text-center">Restart</button>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="site">
                <div className="container">
                    <GameInfo/>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render (
    <Game />,
    document.getElementById ('app')
);