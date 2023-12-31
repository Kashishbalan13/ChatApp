import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "Smooth" });
  }, [message]);

  return (
    <div
      className={'Message ${message.senderId === currentUser.uid && "owner"}'}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{Message.text}</p>
        {Message.img && <img src={Message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
