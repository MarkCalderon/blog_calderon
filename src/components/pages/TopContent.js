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
        console.log('start fetch')
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
            <div className="inner">
                <section className="postContainer">
                    {dataList}
                </section>
            </div>
        )
    }
}