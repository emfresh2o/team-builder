import React, { useState } from 'react';

    // State inputs
    function MembersForm(props) {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [role, setRole] = useState('')
        
    // Handle changes name input
    function handleNameChange(e){
        setName(e.target.value);
    }

    // Handle changes email input
    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    // Handle changes role input
    function handleRoleChange(e){
        setRole(e.target.value);
    }

    // Handle form submission
    const newMember = {
        name: name,
        email: email,
        role: role
    }
    const submitForm = element => {
        element.preventDefault();
        props.addNewMember(newMember);
        setName('');
        setEmail('');
        setRole('');
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'> Name </label>
            <input 
                type='text' 
                name='name'
                onChange={handleNameChange}
                value={name}
                placeholder='name'
            >
            </input>
            <label htmlFor='email'> Email </label>
            <input 
                type='text' 
                name='email'
                onChange={handleEmailChange}
                value={email}
                placeholder='email'
            >
            </input>
            <label htmlFor='role'> Role </label>
            <select id='roles' onChange={handleRoleChange} value={role}>
                <option value='' disabled>select role</option>
                <option value="Front End Engineer">Front End Engineer</option>
                <option value="Back End Engineer">Back End Engineer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="UX/UI Designer">UX/UI Designer</option>
                <option value="Software Engineer">Software Engineer</option>
            </select>
            <button type='submit' value='submit'> Add Member </button>
        </form>
    );
    }

export default MembersForm;