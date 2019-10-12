import React from 'react';

const Users = props => {
    const usersElement = props.users.map(u => <User key={u.id} user={u} />)
    return <>
        {usersElement}
    </>
}
export default Users;

const User = props => {
    return <div>
        {props.user.name}
    </div>
}




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