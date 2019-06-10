import React, { Component } from 'react';
import Link from 'next/link';
// import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
// import SuperComponent from '../components/SuperComponent';
// class based component
// class indexPage extends SuperComponent {
class indexPage extends Component {

    constructor() {
        super();

        this.state = {
            title: 'I am indexpage state'
        }
        console.log('constructor');
    }

    updateTitle = function(data) {
        console.log("updateTitle");
        this.setState({title: data});
    }

    //retrun jsx
    render () {
        // debugger;
        // destruction shortcut title
        // const title = this.state.title;
        const {title} = this.state;


        return (
            <BaseLayout>
                <h1>Main index page of {this.props.appName}</h1>
                <p>Lorem Ipsum... </p>
                <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
                <h5>current state: {title}</h5>
                <button onClick={() => this.updateTitle("hi there") }> ChangeStateButton </button>
            </BaseLayout>
        );
    }
}

export default indexPage;
