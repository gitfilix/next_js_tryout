import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

    constructor() {
        super();

        this.someVariable = 'just some supervariable string, whatever';
    }

    alertName(title) {
        alert(title);
    }

    render () {
        return (
            <div>
                <Header />
                <h2>I am SuperComponent</h2>
            </div>
        )
    }
}

export default SuperComponent;
