'use strict';

import React from 'react';

class UsersAvatar extends React.Component {
    render() {
        return (
            <figure className="media-left">
                <img className="media-object" width="64px"
                     src={`http://lorempixel.com/${this.props.picture}`}/>
            </figure>
        )
    }
}

export default UsersAvatar;