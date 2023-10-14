import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-950 shadow-2xl text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div>
        <Link href={'/api/admin/layoutdesign'} className="sm:text-lg lg:text-2xl flex items-center  font-bold">Dashboard</Link>
        </div>
        <div className='flex gap-3 px-3 '>
        <Link href={'/api/admin/layoutdesign/addproduct'} className="sm:text-xs lg:text-2xl font-bold sm:px-0  lg:px-4 py-2 rounded-md bg-red-500 hover:bg-red-600"> Add Product</Link>
        <Link href={'/api/admin/layoutdesign/vieworder'} className="sm:text-xs lg:text-2xl font-bold sm:px-0  lg:px-4 py-2 rounded-md bg-green-500 hover:bg-green-600">My Order</Link>
        <Link href={'/api/admin/layoutdesign/viewproduct'} className="sm:text-xs lg:text-2xl font-bold sm:px-0  lg:px-4 py-2 rounded-md bg-green-500 hover:bg-green-600"> Manage Product</Link>

        </div>
    </div>
    </header>
  );
};

export default Header;
