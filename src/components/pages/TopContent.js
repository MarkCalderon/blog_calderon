import React from 'react'

import PostData from './PostData'

export default class TopContent extends React.Component {

    constructor() {
        super()
        this.state = {
            postList: []
        }
    }    

    fetchData() {
        fetch('https://devcalderon-44a5b.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(data => {
            // console.table(data)
            this.setState({
                postList: data
            })
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        
        const data = this.state.postList

        const dataList = Object.keys(data).map(item => {
            return (
                <PostData 
                    key={data[item].id}
                    title={data[item].title}
                    category={data[item].category}
                    datePosted={data[item].datePosted}
                    body={data[item].body}
                    poster={data[item].poster}
                />
            )
        })

        return (
            <main className="home">
                <div className="inner">
                    <section className="postContainer">

                        <article className="postItem">
                            <hgroup className="postTitle">
                                <h2>Node Package Manager (NPM)</h2>
                                <h3>TOOLS</h3>
                                <span>09.05.2020</span>
                            </hgroup>
                            <div className="postBody">
                                <blockquote>"The best investment is in the tools of one's own trade."<cite> ~Benjamin Franklin</cite></blockquote>
                                <h4>It's worth knowing that NPM is becoming, if not already one of the tool that every developer have in their arsenal.</h4>
                                <figure>
                                    <i className="fab fa-npm a--c"></i>
                                </figure>
                                <h4>What is NPM?</h4>
                                <p>It is a package manager that holds a directory on the cloud to all the available components.</p>
                                <p>Before NPM, developers would be creating components or elements for every project, which makes starting new projects tiring and if not repetitive. Take note though, This system already exist with existing technologies, but it only became popular with the release of Node.js</p>
                                <h4>You get to choose what you want, when or how you want it with a single line of code</h4>
                                <h4>What are the use cases?</h4>
                                <ul>
                                    <li>Create or recycle components</li>
                                    <li>Simplifies startup of projects</li>
                                    <li>Reduces initial setup time</li>
                                    <li>Use CLI to execute commands</li>
                                </ul>
                                <small>Mark AC.</small>
                            </div>
                        </article>

                        {dataList}
                    </section>
                </div>
            </main>
        )
    }
}