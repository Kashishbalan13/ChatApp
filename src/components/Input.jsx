import React from "react"
import Attach from "../img/attach.jpg";
import OIP from "../img/OIP.jpg";


const Input = () => {
    return (
        <div className="Input">
            <input type="text" placeholder="Type something.." />
            <div className="send">
                <img src={Attach} alt="" />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <img src={OIP} alt=""/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input