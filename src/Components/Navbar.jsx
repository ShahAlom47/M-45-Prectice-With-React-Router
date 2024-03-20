import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="navbar bg-neutral text-gray-300 lg:flex-row flex-col">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl">React <span className="text-slate-900 p-1 rounded-md bg-gray-300">Router</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ">
                    <NavLink to={'/'} className={'navBtn'}>Home</NavLink>
                    <NavLink to={"/Meals"} className={'navBtn'}>Meals</NavLink>
                    <NavLink to={'About'} className={'navBtn'}>About</NavLink>
                    <NavLink to={'/Login'} className={'navBtn'}>LogIn</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;