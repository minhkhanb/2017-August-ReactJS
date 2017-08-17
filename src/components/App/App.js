import React , {Component} from 'react';

class App extends Component {
    render() {
        return(
            <div>
                <u>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </u>

                {this.props.children}
            </div>
        );
    }
}

export default App;