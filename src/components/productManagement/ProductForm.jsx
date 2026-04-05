import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
      const [error, setError] = useState('')
      const handleSubmit = (e) => {
            e.preventDefault();
            // console.log(e.target.name.value);
            const name = e.target.name.value;
            const price = e.target.price.value;
            const quantity = e.target.quantity.value;
            // console.log(name, price, quantity);
            if (name.length === 0) {
                  setError('please provide a valid name');
                  return;
            } else if (price.length === 0) {
                  setError('please use a valid price');
                  return;
            } else if (price < 0) {
                  setError('please input a valid number');
                  return;
            } else {
                  setError('')
            }
            const newProduct = {
                  name,
                  price,
                  quantity
            }
            // console.log(newProduct);
            handleAddProduct(newProduct);
      }

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder='Product Name' />
                        <br />
                        <input type="text" name='price' placeholder='Product Price' />
                        <br />
                        <input type="text" name='quantity' placeholder='Product Quantity' />
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
                  <p style={{ color: 'red' }}><small>{error}</small></p>
            </div>
      );
};

export default ProductForm;