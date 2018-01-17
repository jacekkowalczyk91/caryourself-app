import React, {Component} from 'react';
import './App.css';

import Cars from './Components/Cars'

import {
    Grid
} from 'react-bootstrap'

import {
    BrowserRouter as Router, Route

} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <Grid>
                    <Route path="/" component={Cars}/>
                </Grid>
            </Router>
        )
    }
}

export default App;
