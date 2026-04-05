import React from 'react';
import UseInputField from '../useInputField/UseInputField';

const CustomForm = () => {

      const [email, emailOnChange] = UseInputField('')
      const [name, nameOnChange] = UseInputField('')
      const handleSubmit = e => {
            e.preventDefault();
            console.log('submit', email, name)
      }


      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="text" onChange={nameOnChange} defaultValue={name} />
                        <br />
                        <input type="email" name="email" onChange={emailOnChange} defaultValue={email} />
                        <br />
                        <input type="submit" value="Submit" />

                  </form>
            </div>
      );
};

export default CustomForm;