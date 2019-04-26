import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>Authentication page with {props.appName}</h1>
        <div>Login:</div>
        <input type="text"/>
        <div>password: </div>
        <input type="password" />
        <br />
        <User name="Fiiliks" age={28} />

        <p>go back with next-Router</p>
        <button onClick={ ()=> Router.push('/')}>Go back to startpage</button>
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "Super App for auth" });
        }, 500);
    });
    return promise;
}

export default authIndexPage;
