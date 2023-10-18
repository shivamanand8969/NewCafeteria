import React from 'react'
import LoadingBar from './components/Loadingbar'
import Loader from './components/Loading1'

const loading = () => {
  return (
    <div>
        <LoadingBar/>
        <div className='bg-slate-900 flex justify-center items-center'>
           <Loader/>
        </div>
    </div>
  )
}

export default loading