import React, { useState } from 'react';

const ControlledField = () => {


      const [password, setPassword] = useState('');
      const [error, setError] = useState('');


      const handleSubmit = (e) => {
            e.preventDefault();
            // console.log('Submitted');
            if (password.length < 6) {
                  setError('your password must be contain six character');
            } else {
                  setError('')
            }
      }
      const handleOnChange = e => {
            // console.log(e.target)
            setPassword(e.target.value);

            if (password.length < 6) {
                  setError('your password must be contain six character');
            } else {
                  setError('')
            }
      }

      return (
            <div>
                  <h2>This Is Controlled Field</h2>
                  <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder='Your_New_Email' />
                        <br />
                        <input type="password" onChange={handleOnChange} name="password" placeholder='Your Password' />
                        <br />
                        <input type="submit" value="submit" />
                  </form>
                  <p><small>{error}</small></p>
            </div>
      );
};

export default ControlledField;