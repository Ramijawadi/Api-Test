import React from 'react';
import './App.css';
const Contenu = ({ user }) => {
    return (
        <div>
            <ul className='list'>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </ul>
            ------------------------
        </div>
    );
};

export default Contenu;