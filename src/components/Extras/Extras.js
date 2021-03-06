import React, { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./Extras.module.css";
import { motion } from "framer-motion";
import PizzaSlices from "../PizzaSlices/PizzaSlices";

const Extras = (props) => {
  const [isModal, setModal] = useState(false);
  let flag = false;
  const modal = (
    <Modal show={true}>
      <PizzaSlices></PizzaSlices>
    </Modal>
  );
  const changeflag = () => {
    flag = !flag;
    console.log(flag);
  };
  const changepage = () => {
    console.log("Great");
    props.history.push("/ChooseExtras");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className={classes.header}>
        <div>
          <h1 className={classes.h1}>
            <strong>בחר תוספת</strong>
            <button className={classes.btnheader}></button>
          </h1>
        </div>
      </header>
      <div className={classes.div1} onClick={changepage}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={classes.div4}>
              <img
                src="https://dqzrr9k4bjpzk.cloudfront.net/images/17191041/1089051689.jpg"
                className={classes.img}
              ></img>
              <button className={classes.btnback}></button>
            </div>

            <h3 className={classes.h3}>פטריות </h3>
          </div>
        </div>
      </div>

      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={classes.div4}>
              <img
                src="https://webshop.bakeplus.nl/Documents/ProductImages/Large/75168.jpg"
                className={classes.img}
              ></img>
              <button className={classes.btnback}></button>
            </div>

            <h3 className={classes.h3}>זיתים ירוקים</h3>
          </div>
        </div>
      </div>

      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={classes.div4}>
              <img src="black.jpg" className={classes.img}></img>
              <button className={classes.btnback}></button>
            </div>

            <h3 className={classes.h3}>זיתים שחורים</h3>
          </div>
        </div>
      </div>

      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={classes.div4}>
              <img
                src="http://img-aws.ehowcdn.com/400/ds-photo/getty/article/152/215/146734064.jpg"
                className={classes.img}
              ></img>
              <button className={classes.btnback}></button>
            </div>

            <h3 className={classes.h3}>תירס</h3>
          </div>
        </div>
      </div>

      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={classes.div4}>
              <img
                src="https://www.tavshilim.co.il/wp-content/uploads/2014/09/IMG_5677.jpg"
                className={classes.img}
              ></img>
              <button className={classes.btnback}></button>
            </div>

            <h3 className={classes.h3}>חצילים</h3>
          </div>
        </div>
      </div>

      <div className={classes.div1} onClick={() => setModal(!isModal)}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <div className={classes.div4}>
              <img
                src="https://thumbs.dreamstime.com/b/red-onion-slices-sliced-rings-86076248.jpg"
                className={classes.img}
              ></img>
              <button className={classes.btnback}></button>
            </div>
            <h3 className={classes.h3}>בצל</h3>
          </div>
        </div>
      </div>
      {isModal && modal}
    </motion.div>
  );
};

export default Extras;
