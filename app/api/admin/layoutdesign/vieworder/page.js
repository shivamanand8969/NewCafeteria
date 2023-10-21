// // import Dashboard from '@/app/api/(design)/Dashboard'
// import React from 'react'

// const page =async () => {

//   const order1=await fetch("http://127.0.0.1:3000/api/demodata");
//   const order=await order1.json();
  
//   return (
//     <div>
//         {/* <Dashboard order={order}/> */}
//     </div>
//   )
// }

// export default page
import Dashboard from '@/app/api/(design)/Dashboard';
import React from 'react'

const page = async () => {
  const order1=await fetch('http://127.0.0.1:3000/api/demodata');
  const order=await order1.json(); 
   
  return (

    <div>
      <Dashboard order={order}/>
    </div>
  )
}

export default page