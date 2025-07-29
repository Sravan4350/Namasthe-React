import { useState } from "react";

const Header = () => {

const [isLoggedOut, setIsLoggedOut] = useState(false);

  const onClickLogout = () => {
    setIsLoggedOut(prev => !prev);
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="nav-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s" alt="Restaurant Logo" />
      </div>

      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <li style={{display:"flex", gap:"10px"}}><h5>{isLoggedOut ? "LogOut" : "Login"}</h5>
          <button className="logout-button" onClick={onClickLogout}>
             <img style={{width:"30px"}} src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png" />
          </button>
        </li>
      </ul>
    </div>
  </div>
  );
};
export default Header;