import {  NavLink } from 'react-router-dom';
import { navList, useMultiEmpleo } from '../Context'
import { FolderOpenIcon } from '@heroicons/react/24/outline'

const NavBar = () =>{
  
  const multiEmpleo = useMultiEmpleo();
  return (
    <nav className='w-full h-[10vh] bg-[--coolors-dark-blue] text-[1.1rem] flex flex-col justify-center text-white' >
      <ul className='flex gap-3 px-4'>
        {navList.map((route, index )=> <li key={index+'route'}><NavLink  to={route.path} className={({isActive})=>isActive ? 'underline underline-offset-4 underline-white' : ''} >{route.name}</NavLink></li>)}
      </ul>
    </nav>
  )
}
const AsideBar = () => {
  return (
    <div className='flex justify-center w-12 h-[90vh] bg-[--coolors-dark-blue] text-[1.1rem] text-white smMax:hidden'> 
      <ul className='flex flex-col gap-7 h-full py-10'>
        <li ><FolderOpenIcon className='w-10 h-10'/></li>
        <li ><FolderOpenIcon className='w-10 h-10'/></li>
        <li ><FolderOpenIcon className='w-10 h-10'/></li>

      </ul>
    </div>
  )
}
export {NavBar, AsideBar};