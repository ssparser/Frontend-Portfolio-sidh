import {hamburger} from '../assets/icons/index'
import {headerLogo} from '../assets/images/index'
import { navLinks } from '../data/Index'

const Navbar = () => {
  return (
    <header className='padding-x py-8 sticky top-0 z-20 w-full filter bg-white' >
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
            <img className='w-20 h-18' src={headerLogo}  
            ></img>
        </a>
        <ul className='flex flex-1 justify-center items-center gap-20 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key = {item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        <div className='hidden max-lg:block'>
            <img className='w-6 h-6' src={hamburger}>
            </img>
        </div>
        <a href='/' className='italics font-montserrat font-bold hover:underline decoration-slate-gray text-coral-red max-lg:hidden'>
            sign in or sign up
        </a>
      </nav>
    </header>
  )
}

export default Navbar
