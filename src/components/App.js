import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './common/Header'

import TopContent from './pages/TopContent'

export default class App extends React.Component {

    render() {
        return (
            <main className="home">
                <Header />

                <Router>
                    <Switch>
                        <Route path="/" exact component={TopContent}/>
                    </Switch>
                </Router>
                
            </main>
        )
    }
}