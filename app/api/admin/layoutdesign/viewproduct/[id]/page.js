import Updatefrom from "@/app/api/(design)/Updateform";


const page =async  ({params}) => {
      let {id}=params;
        let data=await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/product/${id}`,{cache:'no-store'});
        data=await data.json();   
        
        return <>
        <Updatefrom data1={data.data} id={id}/>
        </>
}
export default page