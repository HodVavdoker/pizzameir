import React, { useContext } from "react";
import classes from "./Menu.module.css";
import { motion } from "framer-motion";

const Menu = (props) => {
  const data = [
    {
      id: 1,
      name: "פיצות",
      img:
        "http://www.envies-de-france.fr/wp-content/uploads/2014/01/pizza-nancy-677x483.jpg",
      url: "/Sales",
    },
    {
      id: 2,
      name: "פסטות",
      img:
        "https://cdn.robadadonne.it/wp-content/uploads/sites/4/2015/05/spaghetti-2-640x320.jpg",
      url: "/Pastas",
    },
    {
      id: 3,
      name: "מאפים",
      img:
        "https://acdn.foodbox.co.il/wp-content/uploads/sites/7/2020/02/11101400/%D7%96%D7%99%D7%95%D7%942.png",
      url: "/Mafiim",
    },
  ];
  const changepage = (type) => {
    props.history.push(type);
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6,
  };
  const pageStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <header className={classes.header}>
        <h1 className={classes.h1}>תפריט</h1>
        <img src="menu.png" className={classes.imgheader} alt="menu.png"></img>
      </header>
      {data.map(({ id, name, img, url }) => (
        <div key={id} className={classes.div1} onClick={() => changepage(url)}>
          <div className={classes.div2}>
            <div className={classes.div3}>
              <div className={classes.div4}>
                <img src={img} className={classes.img} alt={img}></img>
              </div>
              <div className={classes.div5}>
                <h3 className={classes.h3}>{name}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
export default Menu;
