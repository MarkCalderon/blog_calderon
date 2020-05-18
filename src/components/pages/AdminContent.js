import React from 'react'

import AdminData from './AdminData'

export default class AdminContent extends React.Component {

    constructor() {
        super()
    }

    render() {


        // isAuth == true
        if (this.props.isAuth) {
            return (
                <main className="admin">
                    <div className="inner">
                        <a href="#" onClick={(event) => this.props.onSignOut()}>Sign out</a>
                        <section className="adminContainer">
                            <h4 className="isAdmin">ADMINISTRATIVE CONTROL</h4>
                        </section>
                        <section className="adminOption">
                            <button><i className="fas fa-archive"></i><span>&nbsp;MANAGE POST</span></button>
                            <button><i className="fas fa-recycle"></i><span>&nbsp;MAINTAINANCE</span></button>
                            <button><i className="fas fa-sign-out-alt"></i><span>&nbsp;LOG OUT</span></button>
                        </section>
                        <section className="adminBoard">
                            <AdminData></AdminData>
                        </section>
                    </div>
                </main>
            )
        }

        // isAuth == false
        return (
            <main className="admin">
                <div className="inner">
                    <section className="adminContainer">
                        <h4>ADMIN ACCESS ONLY</h4>
                        {/*<div className="g-signin2" data-onsuccess="onSignIn"></div>*/}
                        {/*<a href="#" onClick={(event) => this.props.onSignOut()}>Sign out</a>*/}
                        {/*<button onClick={(event) => this.props.signInWithPopUp()}>AUTHENTICATE ACCESS</button>*/}
                    </section>
                </div>
            </main>
        )
    }
}