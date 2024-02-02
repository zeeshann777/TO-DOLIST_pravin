import React from 'react'

const Taskupdate = () => {
    return (
        <div className='flex justify-center items-center h-[500px] w-[300px] bg-slate-500 rounded-lg mt-10'>
            <div className='flex flex-col justify-center items-center gap-12'>
                <input placeholder='enter your task' />
                <button className='h-[30px] w-[100px] rounded-lg bg-slate-400'>Sumit</button>
            </div>
        </div>
    )
}

export default Taskupdate
