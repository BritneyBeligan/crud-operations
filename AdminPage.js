import React, { useState } from 'react';
import './AdminPage.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const [entries, setEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission for adding or updating
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update entry
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = formData;
      setEntries(updatedEntries);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new entry
      setEntries([...entries, formData]);
    }
    // Reset form
    setFormData({ firstName: '', lastName: '', username: '', email: '', age: '' });
  };

  // Edit an entry
  const handleEdit = (index) => {
    setFormData(entries[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Delete an entry
  const handleDelete = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header>
        <h3 className="logo">
          <a href="/">Hogwarts</a>
        </h3>
        <nav className="navigation">
          <a href="/">Logout</a>
        </nav>
      </header>
  
  <div className="glass-container-admin">
      <center>
        <h2>A D M I N</h2>

        {/* Form for adding and updating */}
        <form onSubmit={handleSubmit} id="crud-form">
          <center>
            <input type="text" id="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} required/>
            <input type="text" id="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} required/>

          <div>
            <input type="text" id="username" placeholder="Enter Username" value={formData.username} onChange={handleChange} required/>
            <input type="email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required/>
          </div>

          <div className="pass">
            <input type="password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} pattern="(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}"
                title="Password must be at least 6 characters, contain letters and at least one special character." required/>
          </div>

            <button type="submit" id="submit-btn">{isEditing ? 'Update' : 'Add'}</button>
          </center>
        </form>

        {/* Table displaying entries */}
        <table id="crud-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.firstName}</td>
                <td>{entry.lastName}</td>
                <td>{entry.username}</td>
                <td>{entry.email}</td>
                <td>{entry.password}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  </div>
  );
};

export default Admin;
