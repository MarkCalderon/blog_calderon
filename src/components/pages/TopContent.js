import React from 'react'

export default class TopContent extends React.Component {
    render() {
        return (
            <div class="inner">
                <section className="postContainer">
                    <article>
                        <hgroup className="postTitle">
                            <h2>Lorem Ipsum</h2>
                            <h3>Development</h3>
                            <span>06.05.2020</span>
                        </hgroup>
                        <div className="postBody">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quia laboriosam facere doloribus, at deserunt repudiandae, quas cumque magni, quos nisi maiores distinctio. Aperiam itaque laudantium, aut omnis fuga maiores!</p>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}