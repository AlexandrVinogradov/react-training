import React from 'react';

const Users = props => {
    return <div>
        {
        props.users.map(u => <User key={u.id}  user={u} />)
        }
    </div>
}



export const User = props => {
    
    return <span>
        <div>{props.user.name}</div>
    </span>
}

export default Users;


