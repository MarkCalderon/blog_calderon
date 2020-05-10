import React from 'react'

export default class AdminData extends React.Component {

    constructor() {
        super()
        this.state = {
            title: '',
            category: '',
            visibility: '',
            body: '',
            postList: []
        }
        this.addPost = this.addPost.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    fetchData() {
        fetch('https://devcalderon-44a5b.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                postList: data
            })
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    addPost(event) {
        event.preventDefault()

        fetch('https://devcalderon-44a5b.firebaseio.com/posts.json', {
            method: 'POST',
            body: JSON.stringify({
                id: Object.keys(this.state.postList).length + 1,
                title: this.state.title,
                datePosted: '10.05.2020',
                category: this.state.category,
                body: this.state.body,
                visibility: this.state.visibility
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))

    }

    render() {
        return (
            <div className="postForm">
                <form onSubmit={this.addPost}>
                    <table className="postForm__table">
                        <tbody>
                            <tr>
                                <th>Title:</th>
                            </tr>                   
                            <tr>
                                <td>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        value={this.state.title} 
                                        onChange={this.handleChange} 
                                        placeholder="Type post title here..." 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Category:</th>
                            </tr>                   
                            <tr>
                                <td>
                                    <select 
                                        name="category" 
                                        onChange={this.handleChange} 
                                        value={this.state.category}
                                    >
                                        <option value="">Choose Category:</option>
                                        <option value="1">Developer's Log</option>
                                        <option value="2">Development Tools</option>
                                    </select>
                                </td>
                            </tr> 
                            <tr>
                                <th>Body:</th>
                            </tr>                   
                            <tr>
                                <td>
                                    <textarea 
                                        className="textarea" 
                                        name="body" 
                                        onChange={this.handleChange} 
                                        value={this.state.body} 
                                        placeholder="Type post title here..." 
                                    />
                                </td>
                            </tr>   
                            <tr>
                                <th>Publishing Status:</th>
                            </tr>    
                            <tr>
                                <td>
                                    <select 
                                        name="visibility" 
                                        onChange={this.handleChange} 
                                        value={this.state.visibility}
                                    >
                                        <option value="">Choose Status:</option>
                                        <option value="0">Draft</option>
                                        <option value="1">Publish</option>
                                    </select>
                                </td>
                            </tr> 
                            <tr>
                                <td>
                                    <input type="submit" name="submitButton" />
                                </td>
                            </tr>     
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}