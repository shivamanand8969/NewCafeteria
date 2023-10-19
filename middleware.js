import { NextResponse } from "next/server";

export let middleware=(request)=>{
    let path= request.nextUrl.pathname
     let ispath=path==='/' || path ==='/login'  || path==='/signup';
    //  console.log(ispath)
     let token=request.cookies.get("usercookies");
     if(!token && !ispath){
        return NextResponse.redirect(new URL('/signup', request.nextUrl));
     }

}

export const config={
    matcher:['/','/login','/signup','/aboutus/:path*','/profile/:path*','/myorder/:path*','/cart/:path*','/singleproduct/:path*']
 }