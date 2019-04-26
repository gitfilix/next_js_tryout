import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const authIndexPage = () => (
    <div>
        <h1>Authentication page</h1>
        <div>Login:</div>
        <input type="text"/>
        <div>password: </div>
        <input type="password" />
        <br />
        <p>go back with next-Router</p>
        <button onClick={ ()=> Router.push('/')}>Go back to startpage</button>

    </div>
);


export default authIndexPage;
