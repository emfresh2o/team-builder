import React, { useState } from 'react';
import Member from './teamMember';
import Form from './form';
import './App.css';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'Mitch Freshwater',
    email: 'emfresh2o1018@gmail.com',
    role: 'Front-End React Engineer'
  }]);
  const [errorArr, setErrorArr] = useState([]);

  function addNewMember(member){
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  function handleError(errors){
    setErrorArr(errors);
    // console.log(errors);
  }

  return (
    <div className="App">
      <div className='form-container'>
        <h1>Add New Member</h1>
        <Form addNewMember={addNewMember} handleError={handleError}/>
      </div>
      <Member members={members}/>
    </div>
  );
}

export default App;
