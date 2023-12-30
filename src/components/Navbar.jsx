import React from "react"

const Navbar = () => {
    return (
        <div className="Navbar">
            <span className="logo">Lama Chat</span>
            <div className="user">
                <img src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" alt="" />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;