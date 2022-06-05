import { Component } from 'react';

import UserContext from './user-context';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserProvider extends Component {
    constructor() {
        super();
        this.state = {
            userContext: {
                users: this.fetchUsers()
            }
        }
    }

    fetchUsers() {
        // http request...
        return DUMMY_USERS;
    }

    render() {
        return (
            <UserContext.Provider value={this.state.userContext}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;