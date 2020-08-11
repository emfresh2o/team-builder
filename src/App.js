import React, { useState } from 'react';
import Member from './teamMember';
import Form from './form';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {id: 1,
    name: 'Mitch Fresh2o',
    email: 'emfresh2o1018@gmail.com',
    title: 'Front-End React Engineer'
  }]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      title: member.title
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <div className='form-container'>
        <h3>Member Form</h3>
        <Form addNewMember={addNewMember}/>
      </div>
      <Member members={members}/>
    </div>
  );
}

export default App;
