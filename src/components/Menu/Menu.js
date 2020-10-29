import React from 'react';
import Modal from '../Modal/Modal';
import classes from './Menu.module.css';
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const menu = (props) =>{
        const changepage = (type) =>{
            props.history.push(type);
            }
            const pageVariants = {
                initial: {
                  opacity: 0,
                  x: "-100vw",
                  scale: 0.8
                },
                in: {
                  opacity: 1,
                  x: 0,
                  scale: 1
                },
                out: {
                  opacity: 0,
                  x: "100vw",
                  scale: 1.2
                }
              };
              
              const pageTransition = {
                type: "tween",
                ease: "anticipate",
                duration : 0.6
                
              };
              const     pageStyle={
                position : "absolute",
                width:"100%",
                height:"100%",
              };
    return(
        <motion.div     style = {pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
            <header className = {classes.header}>
                <h1 className = {classes.h1}>תפריט</h1>
                <img  src = "menu.png"
                className = {classes.imgheader} ></img>
            </header>
            <div className={classes.div1}
            onClick ={()=>changepage("/Sales")}>
                <div className={classes.div2}>
                    
                        <div className={classes.div3}>
                            <div className={classes.div4}>
                                <img src = "http://www.envies-de-france.fr/wp-content/uploads/2014/01/pizza-nancy-677x483.jpg"
                                     className = {classes.img}>
                                </img>
                            </div>
                            <div className={classes.div5}>
                                <h3 className={classes.h3}>פיצות</h3>
                            </div>
                        </div>
                   
                </div>
            </div>
            <div className={classes.div1} 
                 onClick ={()=>changepage("/Pastas")}>
                <div className={classes.div2}>
                        <div className={classes.div3}>
                            <div className={classes.div4}>
                                <img src = "https://cdn.robadadonne.it/wp-content/uploads/sites/4/2015/05/spaghetti-2-640x320.jpg"
                                     className = {classes.img}>
                                </img>
                            </div>
                            <div className={classes.div5}>
                                <h3 className={classes.h3}>פסטות</h3>
                            </div>
                        </div>
                    
                </div>
            </div>
            <div className={classes.div1}
            onClick ={()=>changepage("/Mafiim")}>
                <div className={classes.div2}>
                    <div className={classes.div3}>
                            <div className={classes.div4}>
                                <img src = "https://acdn.foodbox.co.il/wp-content/uploads/sites/7/2020/02/11101400/%D7%96%D7%99%D7%95%D7%942.png"className = {classes.img}></img>
                            </div>
                            <div className={classes.div5}>
                                <h3 className={classes.h3}>מאפים</h3>
                                <a className={classes.a}></a>
                            </div>
                    </div>
                </div>
            </div>
            <div className={classes.div1}
                 onClick ={()=>changepage("/Salads")}>
                <div className={classes.div2}>
                        <div className={classes.div3}>
                            <div className={classes.div4}>
                                <img src = "https://www.tamarkineret.co.il/wp-content/uploads/2015/04/11096407_799182166817596_1796177228139807087_o-1024x683.jpg"
                                className = {classes.img}></img>
                            </div>
                            <div className={classes.div5}>
                                <h3 className={classes.h3}>סלטים</h3>
                            </div>
                        </div>
                </div>
            </div>
            <div className={classes.div1}
                 onClick ={()=>changepage("/Drinks")}>
                <div className={classes.div2}>
                        <div className={classes.div3}>
                            <div className={classes.div4}>
                                <img src = "data:image/jpeg;base64,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"
                                     className = {classes.img}>
                                         
                                </img>
                                </div>
                            <div className={classes.div5}>
                                <h3 className={classes.h3}>שתייה</h3>
                            </div>
                    </div>
                </div>
            </div>
            <div className={classes.div1}
                 onClick ={()=>changepage("/Desert")}>
                <div className={classes.div2}>
                        <div className={classes.div3}>
                            <div className={classes.div4}>
                                <img src = "https://acdn.foodbox.co.il/wp-content/uploads/sites/7/2020/05/21123648/PRODUCTS_600X500_32.png"className = {classes.img}></img>
                            </div>
                            <div className={classes.div5}>
                                <h3 className={classes.h3}>קינוחים</h3>
                            </div>
                        </div>
                </div>
            </div>
            
        </motion.div>
    );
}
export default menu;