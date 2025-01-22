import React, { useState } from 'react';

const Model = ({ user, onClose }) => {
  const [editableUser, setEditableUser] = useState(user);
  const baseUrl = 'http://localhost:5000/api/v1'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditableUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSave = async () => {
    try {
      const response = await fetch(`${baseUrl}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalEmail: user.email, 
          ...editableUser,           
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Server error response:', errorData);
        throw new Error('Failed to update the user');
      }
  
      const data = await response.json();
      console.log('User updated successfully:', data);
      onClose();
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };
  
  
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[1035px] h-[600px] rounded-lg shadow-lg  relative">
        <div className="w-full bg-bgColor text-center py-2 rounded-t-lg">
          <p className="text-[#FFFFFF] text-[30px]">View & Edit User</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FFFFFF] bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
        <div className="p-6">
          <form className="flex flex-col gap-4" onSubmit={handleSave}>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={editableUser.name}
                onChange={handleInputChange}
                className="border border-gray-300 px-3 py-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={editableUser.email}
                onChange={handleInputChange}
                className="border border-gray-300 px-3 py-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Phone</label>
              <input
                type="text"
                name="phone"
                value={editableUser.phone}
                onChange={handleInputChange}
                className="border border-gray-300 px-3 py-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm">Status</label>
              <select
                name="status"
                value={editableUser.status}
                onChange={handleInputChange}
                className="border border-gray-300 px-3 py-2 rounded-lg outline-none"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
