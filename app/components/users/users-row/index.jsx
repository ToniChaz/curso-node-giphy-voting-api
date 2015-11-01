'use strict';

import React from 'react';
import UsersAvatar from '../users-avatar';

class UsersRow extends React.Component {

    render() {
        return (
            <li className="media">
                <UsersAvatar picture={this.props.picture}/>

                <div className="media-body">
                    <h4>{this.props.name}</h4>

                    <p>
                        {this.props.title} &nbsp;
                        <span className="label label-info">{this.props.department}</span>
                    </p>
                </div>
                <hr/>
            </li>
        )
    }
}

export default UsersRow;