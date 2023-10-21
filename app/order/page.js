import Product from '../components/Product'
const page =async () => {
  const data1 = await fetch('http://127.0.0.1:3000/api/additem');
  const data = await data1.json();      
      
  return (
        <>
     <div className='bg-[#141449] pt-14'>
         <Product data={data}/>
     </div>
    </>
  )
}

export default page