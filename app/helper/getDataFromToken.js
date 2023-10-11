import JWT from 'jsonwebtoken'
import { NextResponse } from 'next/server';

export let getDataFromToken=(req)=>{
   try {
     let token=req.cookies.get('usercookies').value || '';
     let decodedToken=JWT.verify(token,'tokenname');
     return decodedToken.id;
   } catch(e) {
     throw new Error(e.message);
   }
}