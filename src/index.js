import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

/* Allows us to pull a ton of built in functionality
   AKA subclassing React.Component */
class App extends React.Component {

    // Not required by React, automatically and instantly called before anything else
    constructor(props) {

        /* To make sure that parents or Reacts' components constructur function gets called
           Reference to the parent's constructor function 
           ALWAYS MUST BE DONE */
        super(props);

        // Eventually contain some diff pieces of data and properties that are important and relevant
        // ONLY DO THIS WHEN WE INITIALIZE THE STATE !!!
        this.state = { lat: null };

        // Detects the user's location -- for this project only, we care only for latitude
        window.navigator.geolocation.getCurrentPosition(
            position => {

                // to update state, we use setState!!!
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    // Reacts says we HAVE to define render!!!
    // This is called a lot so we do NOT want to put fetching code here
    render() {
        return <div> Latitude: {this.state.lat} </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));