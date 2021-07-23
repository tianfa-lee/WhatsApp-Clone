import React, { useEffect } from "react";
import "./SidebarChat.css";
import "../Sidebar/Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import axios from "../../config/axios";
import { Link } from "react-router-dom";

export default function SidebarChat({ id, userName, roomName, lastMessage, addNewChat }) {

    // Send a new chatRoom request
    const createChat = async () => {
        const roomName = prompt("Please enter name chat");

        if (roomName) {
            await axios.post("/api/v1/chatroom/new", {
                roomName: roomName,
                messages: []
            });
        }
    };

    // Scroll the App to the bottom when a new chatRoom is created
    useEffect(() => {
        const sidebarChatBody = document.querySelector(".sidebar__chats");
        sidebarChatBody.scrollTop = sidebarChatBody.scrollHeight;

    }, [roomName])

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`}/>
                <div className="sidebarChat__info" key={id}>
                    <h2>{roomName}</h2>
                    {/* Display the last Chat message to a maximum of 30 chars followed by ... */}
                    {lastMessage
                        ? <p>{`${userName}: ${lastMessage.slice(0, 30)}...`}</p>
                        : <p>New chat room ✨</p>
                    }

                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

