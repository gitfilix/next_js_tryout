import React, { Component } from 'react';
import Link from 'next/link';

// class based component
class indexPage extends Component {
    // special (async) Lifecycle hook: get initial props
    // static appName Component: define with getInitialProps
    static getInitialProps(context) {
        // logs out in terminal:
        console.log("context of getInitialProps:",context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: "Super App Property with promise" });
            }, 1000);
        });
    return promise;
}


    //retrun jsx
    render () {
        return (
            <div>
                <h1>Main index page of {this.props.appName}</h1>
                <p>Lorem Ipsum... </p>
                <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
            </div>
        );
    }
}

export default indexPage;
