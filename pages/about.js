import React from 'react';
import Link from 'next/link';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';

class About extends React.Component {

    render () {
        return (
            <BaseLayout>
                <h2>I am About page</h2>
                <p>no plan whats going on here.... </p>
            </BaseLayout>
        )
    }
}

export default About;
