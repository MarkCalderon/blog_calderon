import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './common/Header'

import TopContent from './pages/TopContent'
import AdminContent from './pages/AdminContent'

export default class App extends React.Component {

    setFirebase() {
        var firebaseConfig = {
            apiKey: "AIzaSyBUhHfa2SSWBP6rRnYcY_L1ByIayP_aXBo",
            authDomain: "devcalderon-44a5b.firebaseapp.com",
            databaseURL: "https://devcalderon-44a5b.firebaseio.com",
            projectId: "devcalderon-44a5b",
            storageBucket: "devcalderon-44a5b.appspot.com",
            messagingSenderId: "563214309482",
            appId: "1:563214309482:web:b585e4fb343b2dfa81d213"
        };

        firebase.initializeApp(firebaseConfig);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setFirebase()
    }

    render() {
        return (
            <Router>

                <Header />

                <Switch>
                    <Route path="/" exact component={TopContent}/>
                    <Route path="/admin" component={TopContent}/>
                </Switch>
                
            </Router>
        )
    }
}