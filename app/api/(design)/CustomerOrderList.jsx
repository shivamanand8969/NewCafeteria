import React from 'react';

const CustomerOrderList = ({ orders }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Customer Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full w-full divide-gray-200">
        
          <thead className='bg-red-400'>
            <tr>
              <th className='px-2  text-xl'>Customer's Name</th>
              <th className='px-2  text-xl'>Email</th>
              <th className='px-2  text-xl'>Number</th>
              <th className='px-2  text-xl'>District</th>
              <th className='px-2  text-xl'>Address</th>
              <th className='px-2  text-xl'>Pin Code</th>
              <th className='px-2  text-xl'>Product Name</th>
              <th className='px-2  text-xl'>Product Price</th>
              <th className='px-2  text-xl'>Product Quantity</th>
            </tr>
          </thead>

          <tbody className='border-2 border-gray-500'>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className='text-center border-2 border-black'>{order.username}</td>
                <td className='text-center border-2 border-black'>{order.email}</td>
                <td className='text-center border-2 border-black'>{order.number}</td>
                <td className='text-center border-2 border-black'>{order.district}</td>
                <td className='text-center border-2 border-black'>{order.address}</td>
                <td className='text-center border-2 border-black'>{order.pincode}</td>
                <td className='text-center border-2 border-black'>{order.prname}</td>
                <td className='text-center border-2 border-black'>{order.prPrice}</td>
                <td className='text-center border-2 border-black'>{order.quantity}</td>
                <td className='text-center border-2 border-black'>{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOrderList;
