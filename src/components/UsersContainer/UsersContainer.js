import React from 'react';
import { connect } from 'react-redux';
import { requestUsers } from '../../redux/users-reducer';
import Users from './Users/Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.currentPage, this.pageSize)
    }
    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}
export default connect(mapStateToProps, {requestUsers} )(UsersContainer);