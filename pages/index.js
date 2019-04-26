import React from 'react';
import Link from 'next/link';

const indexPage = () => (
    <div>
        <h1>Main index page</h1>
        <p>Lorem Ipsum... </p>
        <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
    </div>
);


export default indexPage;
