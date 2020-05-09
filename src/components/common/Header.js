import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>DEV-CALDERON</h1>
                <ul className="social__list">
                    <li><a target="_blank" href="https://twitter.com/markzev0"><i className="fab fa-twitter"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/markcalderon/"><i className="fab fa-linkedin"></i></a></li>
                    <li><a target="_blank" href="https://github.com/MarkCalderon"><i className="fab fa-github"></i></a></li>
                </ul>
            </header>
        )
    }
}