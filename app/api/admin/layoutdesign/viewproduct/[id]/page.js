import Updatefrom from "@/app/api/(design)/Updateform";


const page =async  ({params}) => {
      let {id}=params;
        let data=await fetch(`http://127.0.0.1:3000/api/product/${id}`,{cache:'no-store'});
        data=await data.json();   
        
        return <>
        <Updatefrom data1={data.data} id={id}/>
        </>
}
export default page