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

class GameCards extends Component {
    render() {
        return(
            <li className="flip-container">
                <div className="flipper">
                    <div className="front">

                    </div>
                    <div className="back">
                        <img src="http://randomimage.setgetgo.com/get.php?key=8693&amp;height=176&amp;width=176" />
                    </div>
                </div>
            </li>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="site">
                <div className="container">
                    <GameInfo/>
                    <ul>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                        <GameCards/>
                    </ul>
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