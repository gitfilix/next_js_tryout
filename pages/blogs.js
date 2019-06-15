import React from 'react';
import Link from 'next/link';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
class Blogs extends React.Component {

    render () {
        return (
            <BaseLayout>
                <h2>I am blogs page</h2>
            </BaseLayout>
        )
    }
}

export default Blogs;
