
import Link from 'next/link';
import Header from '../components/Header'

let Profiledata =async ({id}) => {
    let data=await fetch(`http://127.0.0.1:3000/api/mydata/${id}`,{cache:"no-store"});
    data=await data.json();
  

  return (
    <>
      <Header />
      <div className='flex flex-col lg:flex-row bg-[#141449] gap-6 h-auto lg:h-screen w-full mt-12 p-4 lg:p-0'>
        <div className='bg-[#141449] h-96 lg:h-3/4 w-full lg:w-1/4 mt-0 lg:mt-12 flex flex-col justify-center items-center shadow-2xl'>
          <div className='w-44 h-44 lg:w-48 lg:h-48 rounded-full'>
            <img src={`/${data.data.profileimage}`} className='h-44 w-44 lg:h-48 lg:w-48 rounded-full' />
          </div>
          <div className='text-2xl text-white mt-2 lg:mt-4'>{data.data.username}</div>
          <Link href={`/profile/${data.data._id}`} className='text-2xl text-white bg-green-500 rounded-lg hover:bg-green-700 mt-4 px-5 py-3'>
            Update
          </Link>
        </div>
        <div className='bg-[#141449] w-full lg:w-3/4 lg:h-3/4 shadow-2xl p-4'>
          <div className='h-16 w-full bg-yellow-500 flex justify-between items-center shadow-2xl'>
            <h1 className='text-[#141449] text-2xl italic ml-2 lg:ml-12'>{data.data.username}</h1>
            <h1 className='text-[#141449] text-2xl italic overflow-hidden lg:mr-5'>{data.data.email}</h1>
          </div>
          <div className='p-4 lg:ml-10'>
            <div className='flex flex-col gap-2 mt-4 lg:mt-8'>
              <div className='flex flex-wrap gap-2'>
                <h1 className='text-2xl text-yellow-100 lg:text-3xl'>Name:</h1>
                <h1 className='text-xl text-white lg:text-2xl'>{data.data.username}</h1>
              </div>
              <div className='flex flex-wrap gap-2'>
                <h1 className='text-2xl text-yellow-100 lg:text-3xl'>Email:</h1>
                <h1 className='text-xl text-white lg:text-2xl'>{data.data.email}</h1>
              </div>
              <div className='flex flex-wrap gap-2'>
                <h1 className='text-2xl text-yellow-100 lg:text-3xl'>Mobile:</h1>
                <h1 className='text-xl text-white lg:text-2xl'>{data.data.number}</h1>
              </div>
              <div className='flex flex-wrap gap-2'>
                <h1 className='text-2xl text-yellow-100 lg:text-3xl'>District:</h1>
                <h1 className='text-xl text-white lg:text-2xl'>{data.data.district}</h1>
              </div>
              <div className='flex flex-wrap gap-2'>
                <h1 className='text-2xl text-yellow-100 lg:text-3xl'>Address:</h1>
                <h1 className='text-xl text-white lg:text-2xl'>{data.data.address}</h1>
              </div>
              <div className='flex flex-wrap gap-2'>
                <h1 className='text-2xl text-yellow-100 lg:text-3xl'>Pin Code:</h1>
                <h1 className='text-xl text-white lg:text-2xl'>{data.data.pincode}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profiledata
