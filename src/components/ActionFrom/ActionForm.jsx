import React from 'react';

const ActionForm = () => {
      const handelAction = (formData) => {
            console.log(formData.get('name'));
            console.log(formData.get('email'));
      }
      return (
            <div>
                  <form action={handelAction}>
                        <input type="text" placeholder='Name' name='name' />
                        <br />
                        <input type="email" name="email" placeholder='Email' id="" />
                        <br />
                        <input type="submit" value="submit" />
                  </form>
            </div>
      );
};

export default ActionForm;