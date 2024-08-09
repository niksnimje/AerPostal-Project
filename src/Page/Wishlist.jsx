import React from 'react'
import { Link } from 'react-router-dom';


function Wishlist() {
  return (
    <>
      <div className="container text-center pt-5">
          <h4>My Wishlist</h4>
          <p>If you are not signed in, your wishlist is only available on this device and will expire at the end of the session.</p> <br />
          <p><Link to={'/account'} className='text-primary'>Sign In</Link> or  <Link to={'/account'} className='text-primary'>Create New Account</Link></p>
          <p>Your wishlist is empty.</p> <br />
          <button className='btn btn-primary text-light'><Link to={"/"} className='text-light text-decoration-none'>Start Adding Items</Link></button> <br /><br /><br />
      </div>
    </>
  )
}

export default Wishlist