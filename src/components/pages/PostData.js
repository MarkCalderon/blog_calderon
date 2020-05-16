import React from 'react'
import hljs from "highlight.js";
import 'highlight.js/styles/tomorrow-night-eighties.css';
// import "./dracula.css";

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

    updateCodeSyntaxHighlighting() {
        document.querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
    };

    detectCategory() {
        if(this.props.category == 1) {
            return `DEVELOPER'S LOG`
        }
        else if(this.props.category == 2) {
            return 'DEVELOPMENT TOOLS'
        }
    }

    componentDidUpdate() {
        this.updateCodeSyntaxHighlighting()
    }

    componentDidMount() {
        this.detectCategory()
        this.updateCodeSyntaxHighlighting()
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