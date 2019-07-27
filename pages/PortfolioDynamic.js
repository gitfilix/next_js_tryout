import React from 'react';
// import Link from 'next/link';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class PortfolioDynamic extends React.Component {

    static async getInitialProps({query}) {
        const portfolioId = query.id
        console.log('portfolioId', portfolioId);
        let portfolio = {}

        try {
            const response  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio = response.data
        } catch(err) {
            console.error(err)
        }

        return {portfolio}
    }


    render() {
        const { portfolio } = this.props;
        console.log('portfolio', portfolio);
        return(
            <BaseLayout>
            <h1>I am PortfolioS Page</h1>
                <p>{portfolio.title}</p>
                <p>{portfolio.body}</p>
                <p>ID: {portfolio.id}</p>

            </BaseLayout>
        )
    }
    }
export default withRouter(PortfolioDynamic);
