import React from 'react'

export default class PostData extends React.Component {
    constructor() {
        super()
        this.createMarkup = this.createMarkup.bind(this)
    }

    createMarkup() { 
        return {
            __html: this.props.body
        } 
    }

    detectCategory() {
        if(this.props.category == 1) {
            return `DEVELOPER'S LOG`
        }
        else if(this.props.category == 2) {
            return 'DEVELOPMENT TOOLS'
        }
    }

    componentDidMount() {
        this.detectCategory()
    }

    render() {
        return (
                <article className="postItem">
                    <hgroup className="postTitle">
                        <h2>{this.props.title}</h2>
                        <h3>{this.detectCategory()}</h3>
                        <span>{this.props.datePosted}</span>
                    </hgroup>
                    <div className="postBody">
                        <div dangerouslySetInnerHTML={this.createMarkup()} />
                        <small>{this.props.poster}</small>
                    </div>
                </article>
        )
    }
}