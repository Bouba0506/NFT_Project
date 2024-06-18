import React, { useState } from "react";
import "./head.css";
import { asset } from "../../assets/index";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
const Head = () => {
  const [cliked, setCliked] = useState(false);
  const handleclick=()=>{
    setCliked(!cliked);
  }
  return (
    <div className="head">
      <div className="ntfimg">
        <img src={asset.nft} alt="nft" />
      </div>
      <div className="navbar">
        <ul className={cliked ? "menu-item active":"menu-item"}>
          <li>
            <a href="/">Home</a>{" "}
          </li>
          <li>
            <a href="/">Services</a>{" "}
          </li>
          <li>
            <a href="/">Ressources</a>{" "}
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <div className="btn">
          <p>Connect</p>
        </div> 
        </ul>
       
        <div className="icon" onClick={(e)=>handleclick(e)}>{cliked ?  <MdClose />:<RxHamburgerMenu />}</div>
      </div>
    </div>
  );
};

export default Head;
