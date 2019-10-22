import React from 'react';

const Users = props => {
    const userElement = props.users.map(u => <NewElement users={u} key={u.id}/>)
    return <div>
        {userElement}
    </div>
}

const NewElement = props => {
    return <div>
        {props.users.name}
    </div>
}
export default Users;


// import React from 'react';
// const Users = props => {
//     return <div>
//         {
//             props.users.map(u => <User key={u.id} user={u} />)
//         }
//     </div>
// }
// export default Users;
// const User = props => {
//     return <div>
//         {props.user.name}
//     </div>
// }