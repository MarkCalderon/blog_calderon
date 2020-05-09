import React from 'react'

export default class AdminContent extends React.Component {

    render() {
        return (
            <main className="admin">
                 <div className="inner">
                    <section className="adminContainer">
                        <form>
                            <legend>Admin Details</legend>
                            <label htmlFor="userLogin">
                                <span>User</span>
                                <input type="text" name="userLogin" />
                            </label>
                            <label htmlFor="userPass">
                                <input type="text" name="userPass" />
                            </label>
                        </form>
                    </section>
                </div>
            </main>
        )
    }
}