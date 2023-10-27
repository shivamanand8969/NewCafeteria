'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/navigation'
  //i am changing from here
let signup = () => {
    let router=useRouter();

    let [checksubmit, setChecksubmit] = useState(false)
    let [username, setUsername] = useState('')
    let [usernamecheck,setusernameCheck]=useState(false)
    let [email, setEmail] = useState('')
    let [checkmail,setCheckmail]=useState(false)
    let [password, setPassword] = useState('')
    let [checkpassword,setCheckpassword]=useState(false);
    let [number, setNumber] = useState('')
    let [checknumber,setCheckNumber]=useState(false)
    let [district, setDistrict] = useState('')
    let [distirctcheck,setDistrictcheck]=useState(false);
    let [address, setAddress] = useState('')
    let [addresscheck,setAddresscheck]=useState(false);
    let [pincode, setPincode] = useState(0)
    let [checkpincode,setCheckpincode]=useState(false);
    let handlename=(e)=>{
        let name=e.target.value;
        setUsername(name);
        if(name.length<=3 || name.length>18){
           setusernameCheck(true);
        }
        else{
            setusernameCheck(false);
        }
    }
    let handlepassword=(e)=>{
        let pass=e.target.value;
        setPassword(pass);
        if(pass.length<8){
            setCheckpassword(true);
        }
        else{
            setCheckpassword(false);
        }
    }
    let handlepin=(e)=>{
          let pin=e.target.value;
          setPincode(pin);
          if(!pin.match(/^\d{6}$/))
          {
            setCheckpincode(true);
          }
          else{
            setCheckpincode(false);
          }
    }
    let handlenumber=(e)=>{
        let ph_noumer=e.target.value;
        setNumber(ph_noumer)
        // let regExp= /^[6-9]\d{9}$/;
        if(!ph_noumer.match(/^[6-9]\d{9}$/)){
            setCheckNumber(true);
        }
        else{
            setCheckNumber(false)
        }
    }
    let handleemail=(e)=>{
        let emailRegx=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        let email=e.target.value;
        setEmail(email);
        if(!email.match(emailRegx)){
            setCheckmail(true)
        }
        else{
            setCheckmail(false)
        }

    }
    let handleAddress=(e)=>{
        let addr=e.target.value;
        setAddress(addr)
        if(!addr.match(/^[A-Za-z\s]+$/)){
            setAddresscheck(true);
        }
        else{
            setAddresscheck(false)
        }
    }
    let handleDistrict=(e)=>{
                 let district=e.target.value;
                 setDistrict(district)
                 let disregx=/^[A-Za-z\s]+$/;
                 if(!district.match(disregx)){
                    setDistrictcheck(true);
                 }
                 else{
                    setDistrictcheck(false)
                 }
    }
        let handleSignup =async (e) => {
        setChecksubmit(true)
        e.preventDefault()
        if(username.length<=3 || username.length>18){
            setChecksubmit(false)
           alert("Enter the valid Name")
           return
        }
        if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
            setChecksubmit(false)
            alert('Please enter a valid Email')
            return
        }   
        if (password.length<8){
            alert("Enter your Password")
            setChecksubmit(false)
            return
        } 
        if (number.length != 10 || !(number.match(/^[6-9]\d{9}$/))) {
            alert("Enter the Valid Phone Number")
            setChecksubmit(false)
            return
        }
        if (!district.match(/^[A-Za-z\s]+$/)){
            alert("Please enter a valid District")
            setChecksubmit(false)
            return
        }
        if (!address.match(/^[A-Za-z\s]+$/)) {
            alert("Please enter a valid Address")
            setChecksubmit(false)
            return
        }
        if (!pincode.match(/^\d{6}$/ || pincode.length!=6)) {
            alert("Please enter a valid 6-digit Pincode")
            setChecksubmit(false)
            return
        }
    
        
        let datafetche = await fetch(`${process.env.NEXT_PUBLIC_NOT_SECRET_MESSAGE}/api/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password, number, district, address, pincode })
        })
        datafetche = await datafetche.json();
        if(datafetche.msg==='Sign Up successfully'){   
            alert(datafetche.msg) 
            setChecksubmit(false)   
            router.push('/login')
        }
        else{
            setChecksubmit(false)   
            alert(datafetche.msg) 
            router.push('/signup')
        }
      
    }
    
    return (
        <>
            <Header />
            <div className='w-full h-[152vh] lg:h-[100vh] bg-slate-900 flex justify-center items-center'>
                <div className='w-[80vw] h-[80vh] flex flex-col  justify-center items-center'>
                    <form className='flex gap-3 flex-col lg:flex-row  pt-24 '>
                        <div className='flex flex-col gap-3  '>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='name' className='text-white text-center text-lg'>Name</lable>
                                <input id='name' value={username} autoComplete='off' onChange={handlename} required placeholder='Enter the Name' className='h-10 w-80 outline-0 rounded-sm text-lg text-black px-1' type='text' />
                              {

                              usernamecheck? <p className='text-red-500'>Enter The valid name</p>:''
                              }
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='email' className='text-white text-center text-lg'>Email</lable>
                                <input id='email' value={email} autoComplete='off' onChange={handleemail} required placeholder='Enter the Email' className='h-10 w-80 outline-0 rounded-sm text-lg text-black px-1' type='email' />
                                {
                                  checkmail?  <p className='text-red-500'>Enter The Valid Email</p>:''
                                }
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='password' className='text-white text-center text-lg'>Create Password</lable>
                                <input id='password' value={password} autoComplete='off' onChange={handlepassword} placeholder='Password Must be 9 Digit' required className='h-10 px-1 w-80 outline-0 rounded-sm text-lg text-black' type='text'/>
                               {checkpassword? <p className='text-red-500'>Password Must be 8 digit</p>:''}
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='mnumber' className='text-white text-center text-lg'>Mobile Number</lable>
                                <input id='mnumber' value={number} autoComplete='off' onChange={handlenumber} placeholder='Number Must be 10 Digit' required className='h-10 w-80 px-1 outline-0 rounded-sm text-lg text-black' type='text'/>
                            {
                                checknumber?<p className='text-red-500'>Phone Number Must be valid</p>:''
                            }
                            </div>
                           
                        </div>
                        <div>
                             <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='district' className='text-white text-center text-lg'>District</lable>
                                <input id='district' value={district} autoComplete='off' onChange={handleDistrict} placeholder='purnia..' required className='h-10 w-80 outline-0 rounded-sm px-1 text-lg text-black' type='text' />
                              { 
                              distirctcheck?<p className='text-red-500'>Enter Valid District</p>:''
                              }
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='addres' className='text-white text-center text-lg'>Address</lable>
                                <input id='addres' value={address} autoComplete='off' onChange={handleAddress} placeholder='Khoksibag...' required className='h-10 w-80 outline-0 rounded-sm px-1 text-lg text-black' type='text'/>
                             { addresscheck?<p className='text-red-500'>Enter the Valid Address</p>:''}
                            </div>
                            <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='pincode' className='text-white text-center text-lg'>PinCode</lable>
                                <input id='pincode' value={pincode} autoComplete='off' onChange={handlepin} placeholder='Pin Code Must be 8 Digit' required className='h-10 w-80 outline-0 px-1 rounded-sm text-lg text-black' type='number'  />
                              { checkpincode? <p className='text-red-500'>Enter The Valid PinCode</p>:''}
                            </div>
                            {/* <div className='flex flex-col gap-2 bg-slate-950 rounded-sm px-5 py-2'>
                                <lable htmlFor='profile' className='text-white text-center text-lg'>Upload Your Profile Image</lable>
                                <input id='profile' className='h-9 w-80 outline-0 rounded-sm text-lg text-black' type='file' name='profileimage' />
                            </div> */}
                            <div className='bg-black px-7 mt-2 py-5 rounded-md text-white  '>
                                <button onClick={handleSignup} type='submit' className='px-10 py-3 bg-red-600  hover:bg-red-500 text-white w-80 text-xl font-sans border-black border-5'>
                                    {
                                        (checksubmit) ? <div className='flex  gap-2'><div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div><div>Verifying</div></div> : <div>Submit</div>
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signup