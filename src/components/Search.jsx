import React from "react"

const Search = () => {
    return (
        <div className="Search">
            <div className="Searchform">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" height={25} width={25} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search;