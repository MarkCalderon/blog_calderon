import React from 'react'

import PostData from './PostData'

export default class TopContent extends React.Component {

    render() {
        return (
            <div className="inner">
                <section className="postContainer">
                    <PostData 
                        title="The not so typical hello world..."
                        category="DEVELOPER'S LOG"
                        datePosted="06.05.2020"
                        body="<p>Good day everyone!</p>
                        <p>Today marks the start of creation of <strong> DEV-CALDERON.</strong></p>
                        <p>This site was built from scratch up using React. This will serve as a documentation of my experiences as a web engineer.</p>
                        <p>You may ask why am i creating my own site instead of a premade Content Management System (CMS) platform like WordPress.</p>
                        <p>Well, i get to learn more this way. For every feature added, it includes the process in designing, debugging and developing and deploying. Since we are starting from scratch, i get to learn how to create a website from the ground up.</p>
                        <p>It's only been a month since i started using React. Might as well work on my skillset while creating a brand for myself.</p>
                        <p>Programmers are similar to artists. Except we are a Logical Creative Profession.</p>
                        <p>Till next time, the next one will be a big chapter.</p>"
                        poster="Mark AC."
                    />

                </section>
            </div>
        )
    }
}