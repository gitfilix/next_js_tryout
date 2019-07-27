import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
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

    // return rendered posts from feed and create dynamic links
    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Link as={`/portfolioDynamicLink/${post.id}`} href={`/PortfolioDynamic?id=${post.id}` } >
                        <a style={{'fontSize' :'20px'}}> { post.title} </a>
                    </Link>
                </li>
                )
        })
    }

    render() {
        const { posts } = this.props;

        return(
            <BaseLayout>
            <h1>I am PortfolioS Page</h1>
                <p>titles from post-feed:</p>
                <ul>
                    { this.renderPosts(posts) }
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolios;
