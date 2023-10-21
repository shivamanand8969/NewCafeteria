import Productfetchdata from './Productdatafetch'

export default  function Product({data}){
   return (
    <div>
       {(data)? <Productfetchdata data1={data}/>:<h1>data loading..</h1>}
    </div>
  )
}
        