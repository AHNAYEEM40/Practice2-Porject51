import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvide";

const Navbar = () => {
    const {user,LogOut} =useContext(AuthContext);
    const navlink =(
        <>
         <li><NavLink to='/'>Home</NavLink></li>
         <li><NavLink to='/login'>Login</NavLink></li>
         <li><NavLink to='/register'>Register</NavLink></li>
         <li><NavLink to='/optional'>Optional</NavLink></li>
        
        
        </>
    )
    const handleLogout =() =>{
        LogOut() 
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Lopan Sep</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">
            {
                user ?
                <>
                   <span>{user.email}</span>
                   <a onClick={handleLogout} className="btn">LogOut</a>
                </>
                :
                <Link to='/login'>
                  <a  className="btn">Login</a>
                </Link>
              
             
            }
       
        </div>
      </div>
    );
};

export default Navbar;