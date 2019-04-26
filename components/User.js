import React from 'react';

const user = (props) => (
    <div>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
        <p>styled with 3rd party package styled-jsx</p>
        <style jsx>{`
            div {
                    font-family: verdana, sans-serif;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding 20px;
                    text-align: center;
                }
            `}
        </style>
    </div>
);

export default user;
