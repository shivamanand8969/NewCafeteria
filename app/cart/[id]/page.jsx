import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import SingleProduct from "@/app/components/SingleProduct";
import  JWT  from "jsonwebtoken";
import { cookies } from "next/headers";
let page=async ({params})=>{
    let {id}=params;
       let data=await fetch(`http://127.0.0.1:3000/api/cartitems/${id}`,{cache:"no-store"});
       data=await data.json();
       let cookie=await cookies().get('usercookies')?.value ?? ''
       
       let verifytoken=JWT.verify(cookie,'tokenname');
       let mydata=await fetch(`http://127.0.0.1:3000/api/mydata/${verifytoken.id}`,{cache:"no-store"})
       mydata=await mydata.json();
       
     return(
        <>
     <div>
      <Header/>
      <SingleProduct data1={data.data} mydata1={mydata} id={verifytoken.id}/>
       <Footer/>
    </div>
        </>
     )
}
export default page