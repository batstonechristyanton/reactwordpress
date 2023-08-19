import React, { Component } from 'react'
import axios from 'axios';

export class Posts extends Component {
    state = {
        posts: [],
        isLoaded: false
    } 
    componentDidMount() { 
        axios.get('http://oddvoxel.ca/styleguide-test/wp-json/wp/v2/posts')
            .then(res => this.setState({
                posts: res.data,
                isLoaded: true

            }))
            .catch(err => console.log(err))
    }


    render() {
        const { posts, isLoaded } = this.state;
        return ( 
            
            <div>
                {posts.map(post =>
                    <h4>{post.title.rendered}</h4>
                )}
                {posts.map(post =>
                    <h4>{post.content.rendered}</h4>
                )}
            </div>
        );
    }
}
export default Posts