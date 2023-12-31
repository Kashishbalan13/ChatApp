import React, { useContext } from "react"
import Cam from "../img/5695478.png"
import Frnd from "../img/3330301.png"
import More from "../img/2650848.png"
import Messages from "./Messages"
import Input from "./Input"
import { ChatContext } from "../context/ChatContext"

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="Chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Frnd} alt="" />
                    <img src={More} alt=""/>
                </div>
            </div>
            <Messages />
            <Input/>
        </div>
    )
}

export default Chat;