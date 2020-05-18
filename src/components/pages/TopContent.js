import React from 'react'
import PostData from './PostData'

import SamplePost from './SamplePost'

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

        const dataList = Object.keys(data).reverse().filter(selected => data[selected].status === 1).map(item => {
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
                        <SamplePost></SamplePost>
                        {dataList}
                    </section>
                </div>
            </main>
        )
    }
}