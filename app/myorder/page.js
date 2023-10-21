
import React from 'react'
import { cookies } from 'next/headers';
import JWT from 'jsonwebtoken';
import Myordercomponent from '../components/Myordercomponent';
const myorder = async () => {
  const cookie = cookies().get('usercookies')?.value ?? '';
  let decodedToken = JWT.verify(cookie, 'tokenname');
  let id = decodedToken.id
  return (
    <>
      <Myordercomponent id={id}/>
    </>
  )
}

export default myorder