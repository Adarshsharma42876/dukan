import React from 'react'

const Overview = () => {
  return (
    <div className='Overview px-10 mt-12'>

            <div className="sec1 flex mb-7 justify-between">
                <p className=' text-xl font-semibold'>Overview</p>
                <div  className='px-3  py-1 border-solid border-2 flex items-center rounded-sm bg-white'>
                    <p className=' text-slate-600'>Last Month </p>
                    <svg className='text-slate-600 pl-1' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down m-2 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 9l6 6l6 -6"></path></svg>
                </div>
            </div>

        <div className="sec2 flex gap-5">

            <Cards title="Online orders" amount="231"/>
            <Cards title="Amount received" amount="₹23,92,312.19"/>


        </div>

    </div>
  )
}

function Cards({title , amount}){

    return(<>
        <div className=' w-2/4 h-32 shadow rounded-md pl-7 bg-white '>
            <p className='py-5'>{title}</p>
            <p className=' font-semibold text-4xl'>{amount}</p>
        </div>

    </>)

}

export default Overview