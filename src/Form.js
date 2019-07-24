import React, { useState } from 'react';

function Form() {
    const [user, setUser]= useState({name: '', email: '', role: ''});
    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
      };
        const handleSubmit = event => {
        event.preventDefault();
        console.log(user.name )
        console.log(user.email )
        console.log(user.role )
    }
    return(
        <div className='form'>
            {console.log(user)}
            <form onSubmit={event => handleSubmit(event)}>

                <label>
                    Name:
                    <input 
                    type= 'text' 
                    name= 'name'
                    onChange={event => handleChange(event)} />
                </label>
                <label>
                    Email:
                    <input 
                    type= 'text' 
                    name= 'email'
                    onChange={event => handleChange(event)} />
                </label>
                <label>
                    Role:
                    <input 
                    type= 'text' 
                    name= 'role'
                    onChange={event => handleChange(event)}  />
                </label>
                <label>
                    <button>Add Member</button>
                </label>

            </form>
        </div>
    );
}


export default Form; 