import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import ErrorBondary from './ErrorBoundary';
import styles from './UserFinder.module.css';
import Users from './Users';


class UserFinder extends Component {

    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.setState({ filteredUsers: this.context.users })
    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }

    }
    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {

        return (
            <Fragment>
                <div className={styles.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                    <ErrorBondary>
                        <Users users={this.state.filteredUsers} />
                    </ErrorBondary>
                </div>
            </Fragment>
        );
    }
}
// const UserFinder = () => {

//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

// };

export default UserFinder;