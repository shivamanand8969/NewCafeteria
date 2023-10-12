import React from 'react';

const CustomerOrderList = ({ orders }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
       
          <thead>
            <tr>
              <th>Customer's Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>District</th>
              <th>Address</th>
              <th>Pin Code</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
            </tr>
          </thead>
          
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className='text-center'>{order.username}</td>
                <td className='text-center'>{order.email}</td>
                <td className='text-center'>{order.number}</td>
                <td className='text-center'>{order.district}</td>
                <td className='text-center'>{order.address}</td>
                <td className='text-center'>{order.pincode}</td>
                <td className='text-center'>{order.prname}</td>
                <td className='text-center'>{order.prPrice}</td>
                <td className='text-center'>{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOrderList;
