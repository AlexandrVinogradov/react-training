import React from 'react';

const Users = props => {
    props.users.map(u => <User key={u.id} user={u} />)
    return <>
        <User />
    </>
}
export default Users;

const User = props => {
    return <>
        {props.user}
    </>
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