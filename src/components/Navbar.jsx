import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../auth/authSlice'

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className='navbar bg-base-200'>
            <div className='navbar-start'>
                <h1 className='text-xl font-semibold'>IEODP</h1>
            </div>
            <div className='navbar-center '>
                <div>
                    <p>Home</p>
                    <p>About</p>
                </div>
            </div>
            <div className=' navbar-end'>
                <div className='flex items-center gap-3'>
                    {/* <h1>UserName</h1> */}
                    {!user &&
                        <Link to='/login' className=' btn btn-primary'>login</Link>
                    }
                    {/* <Link to='/signup' className=' btn btn-secondary'>Signup</Link> */}
                    {
                        user &&
                        <div onClick={handleLogout} className=' btn btn-error'>Logout</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar