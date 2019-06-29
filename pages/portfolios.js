import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Portfolios extends React.Component {
    static async getInitialProps() {
        let posts = [];
        // axios fake json jsonplaceholder
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                posts = response.data;
            } catch(err) {
                console.error(err)
            }


        return {posts: posts.splice(0, 10)};
    }

    // return rendered posts from feed
    renderPosts(posts) {
        return posts.map((post) => {
            console.log("renderPosts", post);
            return (
                <li> {post.title} </li>
            )
        } )
    }

    render() {
        const { posts } = this.props;

        return(
            <BaseLayout>
            <h1>I am Portfolios Page</h1>
                <p>titles from post-feed:</p>
                <ul>
                    { this.renderPosts(posts) }
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolios;
