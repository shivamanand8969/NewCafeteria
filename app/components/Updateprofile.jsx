// UserProfileForm.js
"use client"
import { handleSubmit } from "../action";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfileForm = ({data,id}) => {
    const notifysuccess = () => toast.success('Update SuccessFully, If you face any problem then refresh the page!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    
    return (<>
        <div className="bg-[#141449] p-6 rounded-lg shadow-lg">
            <ToastContainer/>
            <h2 className="text-2xl font-semibold text-white">Update Your Profile</h2>
            <h1 className="text-xl text-red-500 ">You need to fill in all the feilds with data</h1>
            <form className="mt-4" action={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-white">Name</label>
                        <input className="h-9 px-5 outline-none rounded font-sans "
                        placeholder={data.username}
                            type="text"
                            name='name'  
                        />
                          <input
                            value={id}
                            type="hidden"
                            name='id'  
                        />
                    </div>
                    <div>
                    <label className="text-white">Email</label>
                    <input
                    
                    placeholder={data.email}
                        type="email"
                        name="email"
                        className="w-full input h-9 px-5 outline-none rounded font-sans "

                    />
                </div>
                   
                </div>
                <div>
                    <label className="text-white">Mobile Number</label>
                    <input

                    placeholder={data.number}
                        type="tel"
                        name="number"
                        className="w-full input h-9 px-5 outline-none rounded font-sans "

                    />
                </div>
                <div>
                    <label className="text-white">District</label>
                    <input
                    placeholder={data.district}
                        type="text"
                        name="district"
                         className="w-full input h-9 px-5 outline-none rounded font-sans "
                    />
                </div>
                <div>
                    <label className="text-white">Address</label>
                    <textarea
                    placeholder={data.address}
                        name="address"
                        className="w-full input px-5 outline-none rounded font-sans "
                    />
                </div>
                <div>
                    <label className="text-white">Pincode</label>
                    <input
                    placeholder={data.pincode}
                        type="text"
                        name="pincode"
                        className="w-full input h-9 px-5 outline-none rounded font-sans "
                    />
                </div>
                <div>
                    <label className="text-white">Profile Image</label>
                    <input
                        type="file"
                        name="profileimage"
                        className="w-full input h-9 px-5 outline-none rounded font-sans "
                    />
                </div>
                <button 
                onClick={notifysuccess}
                    type="submit"
                    className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Update Profile
                </button>
            </form>
        </div>
        </>
    );
};

export default UserProfileForm;
