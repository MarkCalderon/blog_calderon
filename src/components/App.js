import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './common/Header'

import TopContent from './pages/TopContent'
import AdminContent from './pages/AdminContent'

export default class App extends React.Component {

    constructor() {
        super()
        this.signInWithPopUp = this.signInWithPopUp.bind(this)
        this.state = {
            isAuth: false
        }
    }

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

        firebase.initializeApp(firebaseConfig)
    }

    signInWithPopUp() {
        var provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken
            // The signed-in user info.
            var user = result.user

            if(user.email == "mac.a4@live.com") {
                return (
                    this.setState({
                        isAuth: true
                    })
                )
            }

            return (
                console.log('Security: Un-Authorized Access...')
            )

            // ...
        }).catch(error => {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            // The email of the user's account used.
            var email = error.email
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential

            console.log(errorCode)
            // ...
        });
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
                    <Route 
                        path="/admin" 
                        render={(props) => <AdminContent {...props} signInWithPopUp={this.signInWithPopUp} isAuth={this.state.isAuth}/> }
                    />
                </Switch>
                
            </Router>
        )
    }
}