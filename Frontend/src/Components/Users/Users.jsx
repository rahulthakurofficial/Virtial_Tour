import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import "./Users.scss";

const Users = () => {
  return (
    <div className="users" data-aos="fade-down" data-aos-delay="900">
      <div className="avatars">
        <div className="avatar">
          <img src="/avt1.png" alt="User 1" />
        </div>
        <div className="avatar">
          <img src="/avt2.png" alt="User 2" />
        </div>
        <div className="avatar">
          <img src="/avt3.png" alt="User 3" />
        </div>
        <div className="avatar">
          <img src="/avt4.png" alt="User 4" />
        </div>
      </div>
      <div className="status">
        <BsFillCircleFill className="status-icon" />
        <span>400k people online</span>
      </div>
    </div>
  );
};

export default Users;
