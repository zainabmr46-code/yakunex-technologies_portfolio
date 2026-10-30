import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/logo.jpg'
import picture from '../assets/picture.jpg'


const Links = [
    { name: 'Home', path: '/home' },
    {name: 'Services', path: '/services'},
    {name: 'Projects', path: '/projects'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'}
]

function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-gray-200 bg-slate-950 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 px-4">

            <Link to="/home">
                <img src={picture} alt="Yakunex Technologies" 
                className="h-14 w-auto rounded-md"/>
            </Link>
            
            <div className="flex flex-wrap items-center gap-6">
                {Links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className="text-base font-medium text-white hover:text-gray-300"
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </nav>

    </header>
  )
}

export default Navbar