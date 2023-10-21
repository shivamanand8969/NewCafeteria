import Image from 'next/image'
import Link from 'next/link'
import Header from './Header';
import Footer from './Footer';
const Myordercomponent = async ({id}) => {
  let data1 = await fetch("http://127.0.0.1:3000/api/orderapi", { cache: "no-store" });
  data1 = await data1.json();
    return (
    <>
      <Header/>
      <div className=' bg-slate-950 mt-14 '>

        <h1 className='text-white text-3xl text-center py-2'>Your Order Item</h1>


      </div>
      <div className='px-3 bg-slate-950  grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:pb-6 pb-0'>
        {
          data1.data.map((value, key) => (value.userId == id ?
            <div key={key} className=' bg-[#141449] px-3 border-gray-500 border rounded-sm shadow-lg flex flex-col h-[40vh] w-full'>
              <div className='flex justify-center  gap-2 h-44 w-full'>
                <div className='w-[48%] bg-[#141449] h-40 flex justify-center  items-center'><Image src={`/${value.imageurl}`} alt={'image'} height={600} width={600} /></div>
                <div className='w-[48%] h-32 flex flex-col gap-1 mt-5 ml-4'>
                  <p className='text-lg text-white capitalize font-medium font-sans line-clamp-2'>{value.desc}</p>
                  <p className='text-xl text-yellow-500  font-bold'>{value.prname}</p>
                  <p className='text-blue-500 font-bold text-2xl '>₹ {value.prPrice} </p>
                </div>
              </div>
              <div>
                <div className=' flex justify-between  '>


                  <Link className='px-5 py-2 text-lg  rounded-md bg-green-500 text-white hover:bg-green-700 ' href={`/myorder/${value._id}`}>view</Link>
                </div>
              </div>
            </div> : ''
          ))
        }

      </div>
      <div className='bg-[#141449] py-10'>
        <Footer/>
      </div>
    </>
  )
}

export default Myordercomponent