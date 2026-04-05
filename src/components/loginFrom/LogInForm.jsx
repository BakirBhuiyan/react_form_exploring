import React from 'react';
import CustomForm from '../custiomFrom/CustomForm';
import CustomLogIn from '../customLogin/CustomLogIn';

const LogInForm = () => {
      const [name, nameOnChange] = CustomLogIn('')
      const [email, emailOnChange] = CustomLogIn('')
      const [password, passwordOnChange] = CustomLogIn('')


      const handleSubmit = e => {
            e.preventDefault();
            console.log('submitted', name, email, password);
      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="text" onChange={nameOnChange} defaultValue={name} />
                        <br />
                        <input type="email" name="email" onChange={emailOnChange} defaultValue={email} />
                        <br />
                        <input type="password" name="password" onChange={passwordOnChange} defaultValue={password} />
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
            </div>
      );
};

export default LogInForm;