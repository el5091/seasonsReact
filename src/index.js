import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

/* Allows us to pull a ton of built in functionality
   AKA subclassing React.Component */
class App extends React.Component {

    /* the constructor part is 100% equivalent to just this:  */
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        // Detects the user's location -- for this project only, we care only for latitude
        window.navigator.geolocation.getCurrentPosition(

            // to update state, we use setState!!!
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // Reacts says we HAVE to define render!!!
    // This is called a lot so we do NOT want to put fetching code here
    render() {

        // Conditional rendering (if statements) 
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Loading message="Please accept location request..."/>;

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));