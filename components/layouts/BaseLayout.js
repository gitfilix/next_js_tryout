import React from 'react';
import Header from '../shared/Header';
// functional component

const BaseLayout = (props) => {
    return (
        <React.Fragment>
            <Header title={'I am a header-component'} />
            {props.children}
        </React.Fragment>
    )
}


export default BaseLayout;
