import React from 'react';
// import Link from 'next/link';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';

class PortfolioDynamic extends React.Component {

    render () {
        return (
            <BaseLayout>
            <h1>Query param:{this.props.router.query.id}</h1>
                <h2>I am a PortfolioDynamic page</h2>
                <p>url should be dynamic </p>
                <p>for now!</p>
            </BaseLayout>
        )
    }
}

export default withRouter(PortfolioDynamic);
