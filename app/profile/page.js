
import Header from '../components/Header'
import Image from 'next/image'
import { cookies } from 'next/headers'
import JWT from 'jsonwebtoken'
import Profiledata from '../components/Profiledata'
import Footer from '../components/Footer'
const profile = () => {
    let cookie=cookies().get('usercookies')?.value ?? '';
    let verifycookie=JWT.verify(cookie,'tokenname');
   
  return (
    
  <>
  <Profiledata id={verifycookie.id}/>
  <div className='bg-[#141449] pt-4'>
    <Footer/>
  </div>
  </>
  )
}

export default profile