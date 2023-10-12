import React from 'react';

const CustomerDetails = ({ customer }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <p>Username: {customer.username}</p>
        <p>Email: {customer.email}</p>
        <p>Number: {customer.number}</p>
        <p>District: {customer.district}</p>
        <p>Address: {customer.address}</p>
        <p>Pin Code: {customer.pinCode}</p>
      </div>
    </div>
  );
};

export default CustomerDetails;
