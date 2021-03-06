import React, {Component} from 'react';

class NewNumber extends Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!');
    }

    componentDidMount() {
        console.log('Component DID MOUNT!');
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!');
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!');
    }



    render() {
        return(
            <p>
                <input ref={this.props.refData} type="text" value={this.props.num} onChange={this.props.updateStateProp}/>
                <button onClick={this.props.clearStateProp}>Clear</button>
                <strong>{this.props.num}</strong>
            </p>
        );
    }
}

export default NewNumber;