import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './common/Header'

import TopContent from './pages/TopContent'
import AdminContent from './pages/AdminContent'

export default class App extends React.Component {

    constructor() {
        super()
        this.signInWithPopUp = this.signInWithPopUp.bind(this)
        this.onSignOut = this.onSignOut.bind(this)
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
            
            firebase.auth().onAuthStateChanged((user) => {
              if (user.email === 'mac.a4@live.com') {
                return (
                    this.setState({
                        isAuth: true
                    })
                )
              }
              return (
                  console.log('Security: Un-Authorized Access...')
              )
            });

        }).catch(error => {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            // The email of the user's account used.
            var email = error.email
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential
            // ...
        });
    }

    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    onSignOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setFirebase()

        window.gapi.load('auth2', () => {
            this.auth2 = window.gapi.auth2.init({
                client_id: '563214309482-lhb5lqeubgb2qc94sgudlcodlsnr1pgf.apps.googleusercontent.com'
            });
        })
    }

    render() {
        return (
            <Router>

                <Header />

                <Switch>
                    <Route path="/" exact component={TopContent}/>
                    <Route 
                        path="/admin" 
                        render={(props) => <AdminContent {...props} onSignOut={this.onSignOut} isAuth={this.state.isAuth}/> }
                    />
                </Switch>
                
            </Router>
        )
    }
}