import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>OOOpsii... Something went wrong</h1>
        <p>dont know what </p>
        <p>Back to <Link href='/'><a>startpage</a></Link></p>
    </div>
);


export default errorPage;
