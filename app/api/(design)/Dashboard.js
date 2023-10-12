import React from 'react';
import Header from './Header';
import CustomerOrderList from './CustomerOrderList';
import CustomerDetails from './CusotmerDetails';

const Dashboard = ({ orders }) => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
     
      <div className="container mx-auto py-8">
        <div className=" grid-cols-1 md:grid-cols-2 gap-8">
          <CustomerOrderList orders={orders.data} />
          {/* <CustomerDetails customer={orders.data} /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
