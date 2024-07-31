import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_hybrid" />
          </div>
        </div>
        <div>
          <h1 className=" font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
