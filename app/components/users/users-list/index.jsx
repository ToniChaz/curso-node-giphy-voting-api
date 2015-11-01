'use strict';

import React from 'react';
import UsersRow from '../users-row';

class UsersList extends React.Component {

    render() {
        return (
            <ul className="media-list">
                {
                    this.props.list.map((users) => {
                        return <UsersRow key={ user.id }
                                         name={ users.fullName }
                                         picture={ users.pic }
                                         title={ users.title }
                                         department={ users.department }/>
                    })
                }
            </ul>
        )
    }
}

export default UsersList;