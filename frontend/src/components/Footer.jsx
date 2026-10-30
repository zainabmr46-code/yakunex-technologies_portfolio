
import { Link,NavLink } from 'react-router-dom'
import picture from '../assets/picture.jpg'

const Links = [
    {name: 'Home', path: '/'},
    {name: 'Services', path: '/services'},
    {name: 'Projects', path:'/projects'},
    {name: 'About', path:'/about'},
    {name: 'Contact', path:'/contact'}
]

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 border-t border-slate-800 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 ">
        <div>
            <div className="flex items-center gap-2"> 
                <img src={picture} alt="Yakunex Technologies" className="h-10 w-auto rounded-md" />
                <h2 className="text-xl font-bold text-white">
                    Yakunex Technologies
                </h2>
            </div>
          <p className="mt-3 max-w-sm text-sm leading-6">
            Technology with purpose. We help businesses explore digital
            solutions through technology and innovation.
          </p>
        </div>

        <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
                {Links.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className="text-sm font-medium text-gray-400 hover:text-gray-300"
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm leading-6">
            Contact us to discuss your project or IT requirements.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-semibold text-gold hover:opacity-80"
          >
            Send an enquiry →
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-5 text-sm text-gold">
        © {new Date().getFullYear()} Yakunex Technologies. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
