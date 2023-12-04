import {  NavLink } from 'react-router-dom';
import { navList} from '../Context'
import { FolderOpenIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/images/logo/logo.png';

const NavBar = () =>{
  
  return (
    <nav className='w-full h-[10vh] bg-[--coolors-cyan-dark] text-[1.1rem] flex flex-col justify-center text-white' >
      <ul className='flex gap-3 px-4'>
        <NavLink to="/">
          <img src={logo} alt="logo" className='w-10 h-10 rounded-xl border-[2px] border-[white]'/>
        </NavLink>
        {navList.map((route, index )=> <li key={index+'route'}><NavLink  to={route.path} className={({isActive})=>isActive ? 'underline underline-offset-4 underline-white' : ''} >{route.name}</NavLink></li>)}
      </ul>
    </nav>
  )
}
const AsideBar = () => {
  return (
    <div className='flex justify-center w-12 h-[90vh]text-[1.1rem] text-white smMax:hidden border-r-2 border-[--coolors-dark-blue] px-3'> 
      <ul className='flex flex-col gap-7 h-full py-10'>
        <li ><FolderOpenIcon className='w-8 h-8 text-[--coolors-dark-blue]'/></li>
        <li ><FolderOpenIcon className='w-8 h-8 text-[--coolors-dark-blue]'/></li>
        <li ><FolderOpenIcon className='w-8 h-8 text-[--coolors-dark-blue]'/></li>

      </ul>
    </div>
  )
}
export {NavBar, 
  // AsideBar
};