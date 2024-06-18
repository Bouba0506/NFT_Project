import React from "react";
import "./home.css";
import { asset } from "../../assets";
import { FaLongArrowAltDown, FaPlus } from "react-icons/fa";
import { Nftexpo } from "../constant";
import singe from "../../assets/Singe.json"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
const gridContainer={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{staggerChildren:0.25}
  }
}

const gridSquar={
  hidden:{opacity:0},
  show:{opacity:1}
}

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <motion.div
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{duration:1, ease:"easeOut", delay:0.2}}
        className="home_img">
         <Lottie
         animationData={singe} 
         className="lottie" />
          <div className="icons">
          <FaLongArrowAltDown className="down" />
          </div>
        </motion.div>
        <motion.div
           initial={{opacity:0,y:-100}}
           animate={{opacity:1,y:0}}
           transition={{duration:1, ease:"easeOut", delay:0.4}}
        className="left">
          <h1>THE EASIEST PLACE TO INVEST YOUR NFTS</h1>
          <p>The NFT price depends on the result of specific external event</p>
          <div className="explore">
            <div className="right">
              <img src={asset.man} alt="man" />
              <h1>Explore</h1>
            </div>
            <div className="leftexpo">
              <p>Get Ready for explore Art NFT marketplace</p>
              <span>Next Now!</span>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div variants={gridContainer} initial="hidden" animate="show" className="espace">
        {
            Nftexpo.map((item,index)=>(
                <motion.div variants={gridSquar} key={index} className="mapcontainer">
                       <div className="mapindex">
                        <div className="plus">
                        <h1>{item.num} </h1>
                        <FaPlus size={30} />
                        </div>
                        <h2>{item.titre} </h2>
                       </div>
                </motion.div>
            ))
        }
        <motion.div variants={gridSquar} className="imgcontainer">
            <div className="card">
            <img src={asset.girl} alt="gril"/>
            </div>
            <div className="card">
            <img src={asset.man} alt="gril"/>
            </div>
            <div className="card">
            <img src={asset.ph1} alt="gril"/>
            </div>
        </motion.div>
       
      </motion.div>
      <div className="astro">
            <img src={asset.astro2} alt="astronaute"/>
            <div className="art">
            <div className="cards">
            <img src={asset.girl} alt="gril"/>
            </div>
                <h1>Space Art</h1>
            </div>
        </div>
    </div>
  );
};

export default Home;
