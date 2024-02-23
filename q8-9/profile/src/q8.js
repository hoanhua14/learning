// Write a functional component in React that accepts two props, name and age, and renders a string that displays those two values.

import React from 'react';
const Profile = ({name, age}) => {
    const reverseName = (name) => {
        return name.split('').reverse().join('');
    };

    return (
        <>
            <div>Name: {name} Age: {age}</div>
            <h1>{reverseName(name)}</h1>
        </>
    )
}
export default Profile;
