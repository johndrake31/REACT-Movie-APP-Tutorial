import React, { Component } from 'react';

class Like extends Component {
    render() {

        let classes = "fas fa-heart"; //empty
        if (!this.props.like) {
            classes = "far fa-heart";
        }
        return (
            <i
                onClick={this.props.onClick}
                style={{ cursor: "pointer" }}
                className={classes}
                aria-hidden="true"
            />

        )
    }
}

export default Like;