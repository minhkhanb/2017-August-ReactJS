import React,{Component} from 'react';
import NewNumber from './NewNumber';

class DataList extends Component {
    constructor() {
        super ();

        this.state = {
            data:[],
            num:0
        }

        this.setStateHandler = this.setStateHandler.bind (this);
        this.setRandomNumber = this.setRandomNumber.bind (this);
        this.setNewNumber = this.setNewNumber.bind (this);

    }

    setStateHandler() {
        var item = 'new item...';
        var arr = this.state.data;
        arr.push (item);
        this.setState ({data:arr});
    }

    setRandomNumber() {
        this.forceUpdate ();
    }

    setNewNumber() {
        this.state.num = this.state.num + 1;
        this.setState (this.state);
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.num}</td>
                <td>
                    <button onClick={this.setNewNumber}>New Number</button>
                    <button onClick={this.setStateHandler}>Set State</button>
                    <button onClick={this.setRandomNumber}>Rand</button>
                    <h4>State Array: {this.state.data}</h4>
                    <span>{Math.floor (Math.random () * 10)}</span>
                    <NewNumber num={this.state.num}/>

                </td>
            </tr>
        );
    }
}

export default DataList;