import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SingleProduct from "@/app/components/SingleProduct";
import  JWT  from "jsonwebtoken";
import { cookies } from "next/headers";
let page=async ({params})=>{
    let {id}=params;
       let data=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/cartitems/${id}`,{cache:"no-store"});
       data=await data.json();
       let cookie=await cookies().get('usercookies')?.value ?? ''
       
       let verifytoken=JWT.verify(cookie,'tokenname');
       let mydata=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/mydata/${verifytoken.id}`,{cache:"no-store"})
       mydata=await mydata.json();
       
     return(
        <>
     <div>
      <Header/>
      <SingleProduct data1={data.data} mydata1={mydata} id={verifytoken.id}/>
      <div className="bg-[#141449] pt-2">
      <Footer/>
      </div>
    </div>
        </>
     )
}
export default page