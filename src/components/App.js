import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Normalize = require('normalize')

import Header from './common/Header'
import Footer from './common/Footer'

import TopContent from './pages/TopContent'

export default class App extends React.Component {

    render() {
        return (
            <main>
                <Header />

                <Router>
                    <Switch>
                        <Route path="/" exact component={TopContent}/>
                    </Switch>
                </Router>
                <Footer />
                
            </main>
        )
    }
}