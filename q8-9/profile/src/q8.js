// Write a functional component in React that accepts two props, name and age, and renders a string that displays those two values.

import React from 'react';
const Profile = ({name, age}) => {

    return (
        <>
            <div>Output: {name}{age}</div>
        </>
    )
}
export default Profile;
