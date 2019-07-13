import React from 'react';
// import Link from 'next/link';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';

class PortfolioDynamic extends React.Component {

    render () {
        console.log(this.props);
        return (
            <BaseLayout>
            <h1>Query param:{this.props.router.query.title}</h1>
                <h2>I am a PortfolioDynamic page</h2>
                <p>no plan whats going on here.... </p>
                <p>for now!</p>
            </BaseLayout>
        )
    }
}

export default withRouter(PortfolioDynamic);
