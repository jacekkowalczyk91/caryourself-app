import React, {Component} from 'react';
import './App.css';

import CarSearch from './Components/CarSearch/CarSearch'

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
                    <Route path="/" component={CarSearch}/>
                </Grid>
            </Router>
        )
    }
}

export default App;
