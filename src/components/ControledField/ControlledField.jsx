import React, { useState } from 'react';

const ControlledField = () => {
      const [password, setPassword] = useState('')

      const handleSubmit = e => {
            e.preventDefault();
            console.log('[submitted');
      }
      const handleOnChange = e => {
            console.log(e.target.value)
      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder='Email' required id="" />
                        <br />
                        <input type="password" name="password" onChange={handleOnChange} defaultValue={password} placeholder='Password' required id="" />
                        <br />
                        <input type="submit" value="submit" />
                  </form>
            </div>
      );
};

export default ControlledField;