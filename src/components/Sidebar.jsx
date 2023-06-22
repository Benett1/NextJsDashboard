import Link from 'next/link'
import React from 'react'
import { WiCloud } from "react-icons/wi";
import { RxDashboard, RxCalendar, RxCamera, RxCardStack,RxCode } from "react-icons/rx";

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='h-screen p-4 flex justify-betwee bg-slate-300'>
            <div className='flex flex-col gap-3'>
                <Link href={"/"}>
                    <div className='bg-purple-800 hover:bg-purple-700 rounded-lg p-1'>
                        <WiCloud size={30} color='white'/>
                    </div>
                </Link>
                <hr></hr>
                <Link href={"/"}>
                    <div className='bg-gray-100 hover:bg-gray-200 rounded-lg p-1'>
                        <RxDashboard size={30} color='black'/>
                    </div>
                </Link>
                <Link href={"/calendar"}>
                    <div className='bg-gray-100 hover:bg-gray-200 rounded-lg p-1'>
                        <RxCalendar size={30} color='black'/>
                    </div>
                </Link>
                <Link href={"/camera"}>
                    <div className='bg-gray-100 hover:bg-gray-200 rounded-lg p-1'>
                        <RxCamera size={30} color='black'/>
                    </div>
                </Link>
                <Link href={"/stack"}>
                    <div className='bg-gray-100 hover:bg-gray-200 rounded-lg p-1'>
                        <RxCardStack size={30} color='black'/>
                    </div>
                </Link>
                <Link href={"/code"}>
                    <div className='bg-gray-100 hover:bg-gray-200 rounded-lg p-1'>
                        <RxCode size={30} color='black'/>
                    </div>
                </Link>
            </div>
        </div>
        
        <main className='w-full bg-slate-50'>
            {children}
        </main>
    </div>
    
  )
}

export default Sidebar