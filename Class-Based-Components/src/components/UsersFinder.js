import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UsersFinder.module.css';
import UserContext from '../context/user-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
    static contextType = UserContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    searchChangeHandler(e) {
        this.setState({ searchTerm: e.target.value });
    }

    componentDidMount() {
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm === this.state.searchTerm) return;

        const updatedFilteredUsers = this.context.users.filter(user => user.name.includes(this.state.searchTerm));
        this.setState({ filteredUsers: updatedFilteredUsers });
    }

    render() {
        return (
            <Fragment>
                <input
                    className={classes.finder}
                    type='search'
                    onChange={this.searchChangeHandler.bind(this)} />
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default UserFinder;