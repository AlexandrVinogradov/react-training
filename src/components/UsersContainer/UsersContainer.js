import React from 'react';
import { connect } from 'react-redux';
import Users from './Users/Users';
import {requestUsers} from '../../redux/users-reducer';

class UsersContainer extends React.Component  {

    componentDidMount() {
        this.props.requestUsers(this.currentPage, this.pageSize);
    }
    
    render() {
        return<div>
            <Users users={this.props.users}/>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
}
export default connect( mapStateToProps, {requestUsers} )(UsersContainer);


