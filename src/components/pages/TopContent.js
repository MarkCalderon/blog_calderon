import React from 'react'

export default class TopContent extends React.Component {
    render() {
        return (
            <div className="inner">
                <section className="postContainer">
                    <article className="postItem">
                        <hgroup className="postTitle">
                            <h2>FIRST POST.... </h2>
                            <h3>DEV LOG</h3>
                            <span>06.05.2020</span>
                        </hgroup>
                        <div className="postBody">
                            <p>Good day everyone!, today marks the start of <strong>DEV-CALDERON.</strong><br/>
                            This site was built from the ground up with the help of a React Framework. 
                            This will serve as documentation of my time as a web developer.</p>
                            <p>You may ask why should i create my own site instead of using a ready made Content Management System (CMS) like WordPress.</p>
                            <p>Well, this way i get to create more crafted posts for each article. 
                            It also allows me to learn to improve on my current skillset especially when its only been a month since i used React. </p>
                            <p>Programmers are similar to artists. We are a Logical Creative Profession. </p>
                            <p>I hope you enjoy this short log, the next one i will starting a big chapter.</p>
                            <p>Mark</p>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}