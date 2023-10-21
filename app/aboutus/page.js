import { cookies } from 'next/headers';
import JWT from 'jsonwebtoken'
import Aboutus from '../components/Aboutus';
const page = async () => {
  const data1=await fetch(`${process.env.HOST}/api/review`);
 const data=await data1.json();
   let cookie=cookies().get('usercookies')?.value ??''
   let verifyToken=JWT.verify(cookie,'tokenname')
  
  return (
    <>  
    <Aboutus data={data.data} id={verifyToken.id}/>
    </>
    
  )
}

export default page