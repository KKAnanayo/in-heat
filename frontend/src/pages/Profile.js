import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            <button>Edit Profile</button>
        </div>
    );
}

export default Profile;