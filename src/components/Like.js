import React, { Component } from 'react';



const Like = (props) => {
    let classes = "fas fa-heart"; //empty
    if (!props.like) {
        classes = "far fa-heart";
    }
    return (
        <i
            onClick={props.onClick}
            style={{ cursor: "pointer" }}
            className={classes}
            aria-hidden="true"
        />

    )
}

export default Like;