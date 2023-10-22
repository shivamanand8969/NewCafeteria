import {writeFile} from 'fs/promises'
import { redirect } from 'next/navigation'
import {join} from 'path'

const additem = () => {
  let handleSubmit=async (fordata)=>{
    "use server"
    let prname=fordata.get('prname');
    let prPrice=fordata.get('prPrice');
    let desc=fordata.get('desc');
    let discount=fordata.get('discount');
    let file=fordata.get('file')
    let bytes=await file.arrayBuffer();
    let buffer=Buffer.from(bytes);
    let path=join('./public',file.name);
    await writeFile(path,buffer);
    let imageurl=file.name;
    let data=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/additem`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({prname,prPrice,desc,discount,imageurl})
    })
    data=await data.json();
   console.log(data.msg);
    redirect('/api/admin/layoutdesign')
  }
  return (
   <>
    <div className='h-auto lg:h-[100vh] lg:w-full lg:flex lg:justify-center lg:items-center bg-slate-900'>
      <div>
        <form method='POST' className='px-3' action={handleSubmit}>
        <h2 className='text-center text-2xl lg:text-8xl shadow-lg flex justify-center items-center text-red-500 font-bold font-sans'>Add Your Product</h2>
              <div className='flex flex-col lg:flex-row  shadow-2xl'>
              <div className='flex flex-col gap-2 lg:p-10'>
                <label className='text-center text-2xl text-white font-bold font-sans'>Product Name</label>
                <input type='text' name='prname' className='h-10 w-full lg:w-[45vw] outline-none border-slate-700 rounded-md text-2xl border-2'/>
                <label className='text-center text-2xl text-white font-bold font-sans'>Price</label>
                <input type='number' name='prPrice' className='h-10 w-full lg:w-[45vw] outline-none border-slate-700 rounded-md text-2xl border-2'/>
                <label className='text-center text-2xl text-white font-bold font-sans'>Description</label>
                <input type='text' name='desc' className='h-10 w-full lg:w-[45vw] outline-none border-slate-700 rounded-md text-2xl border-2'/>
                </div>
                <div className='flex flex-col gap-2 w-[45vw] lg:p-10'>
                <label className='text-center text-2xl text-white font-bold font-sans'>Discount</label>
                <input type='number' name='discount' className='h-10 sm:w-[273px]  lg:w-[35vw] outline-none border-slate-700 rounded-md text-2xl border-2' placeholder='10%....' />
                <label className=' text-lg lg:text-2xl text-white font-bold font-sans'>Uload Image</label>
                <input type='file' name='file' className='h-10 w-full lg:w-[35vw] outline-none border-slate-700 rounded-md text-2xl'/>
                <input type='submit' className='text-center px-5 text-lg lg:text-2xl py-3 mx-auto rounded-md bg-slate-700 text-white hover:shadow-2xl hover:bg-slate-950'/>
                </div>
              </div>
        </form>
      </div>
        
    </div>
   </>
  )
}

export default additem