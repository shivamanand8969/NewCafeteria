import SingleProduct from '@/app/components/SingleProduct';
import React from 'react'

const singleproduct = async({params}) => {
  let {id}=params;
  let data= await fetch(`http://127.0.0.1:3000/api/product/${id}`,{cache:"no-store"})
  data=await data.json();

  return (
    <div>
      <SingleProduct data1={data.data}/>
    </div>
  )
}

export default singleproduct