import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit} className='form'>
        <div id='cname' className='form-item'>
          <label htmlFor='name'>Name:</label>
          <input 
            type='text' 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div id='cemail' className='form-item'>
          <label htmlFor='email'>Email:</label>
          <input 
            type='email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange}
            required 
          />
        </div>
        <div id='cphone' className='form-item'>
          <label>Phone:</label>
          <input 
            type='tel' 
            name='phone' 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type='submit' className="button-19">Contact</button>
      </form>
    </div>
  );
};

export default Contact;
