import React from 'react';
import CustomerOrderList from './CustomerOrderList'
const Dashboard = ({order}) => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">

      <div className="container mx-auto py-8">
        <div className=" grid-cols-1 md:grid-cols-2 gap-8">
          <CustomerOrderList orders={order.data}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
