import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render () {
        return(
            <React.Fragment>
                <Link href="/" >
                    <a>Home</a>
                </Link>
                <Link href="/about" >
                    <a>about</a>
                </Link>
                <Link href="/portfolio" >
                    <a>portfolio</a>
                </Link>
                <Link href="/blogs" >
                    <a>Blogs</a>
                </Link>
                <Link href="/cv" >
                    <a>CV</a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Header;
