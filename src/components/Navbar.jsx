import React, { useContext } from 'react'

const Navbar = () => {
    // const {currentUser} = useContext(AuthContext)
    return (
      <div className='navbar'>
        <span className="logo">Users Name</span>
        <div className="user">
          {/* <img src={currentUser.photoURL} alt="" /> */}
          {/* <span>{currentUser.displayName}</span> */}
          {/* <button onClick={()=>signOut(auth)}>logout</button> */}
          <b>This Navbar</b>
        </div>
      </div>
    )
  }
  
  export default Navbar