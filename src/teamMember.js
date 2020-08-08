import React from 'react';

function Member({members}){
    return (
        <div className='member-container'>
            <h1>Members</h1>
            {members.map(member => {
                return <div key={member.id} className='member'>
                    <h3>{member.name}</h3>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            })}
        </div>
    )
}

export default Member;