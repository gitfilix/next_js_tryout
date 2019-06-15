import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
// import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
// class based component
//class indexPage extends Component {
class indexPage extends SuperComponent {

    static async getInitialProps() {
        let userData = {};
        // axios fake json jsonplaceholder
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                userData = response.data;
            } catch(err) {
                console.error(err)
            }


        return {
            initialData: [1, 2, 3, 4, 55],
            userData
        };
    }


    constructor() {
        super();

        this.state = {
            title: 'I am indexpage state'
        }
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
        const { userData, initialData} = this.props;
        return (
            <BaseLayout>
                <h1>Main index page of {this.props.appName}</h1>
                <p>User Data title from feed: {userData.title} </p>
                <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
                <h5>current state: {title}</h5>

                <button onClick={() => this.updateTitle("hi there") }> ChangeStateButton </button>
            </BaseLayout>
        );
    }
}

export default indexPage;
