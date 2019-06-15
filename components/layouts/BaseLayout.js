import React from 'react';
import Header from '../shared/Header';
// functional component

const BaseLayout = (props) => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <Header title={'I am a header-component'} />
                {props.children}
            </div>
        </React.Fragment>
    )
}


export default BaseLayout;
