import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './HomePage.module.css';
import ListOfButtons from '../../components/ListofButtons/ListofButtons';
import StartOrder from '../../components/StartOrder/StartOrder';
import Modal from '../../components/Modal/Modal';
import DetailsDelivery from '../../containers/DetailsCustomer/DetailsDelivery';
import {motion } from "framer-motion";
import Extras from '../../components/Extras/Extras';
import Button from '../../components/UI/Button/Button';
import styled from 'styled-components';
import PizzaSlices from '../../components/PizzaSlices/PizzaSlices';

class HomePage extends Component{

  
   pageVariants = {
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
  
   pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5
  };
       pageStyle={
    position : "absolute",
    width:"100%",
    height:"100%",
  };
    state = {
        openstartorder : false,
        openmenu : false,
        opendetailscustomer : false,
        cancel : true,
        show : true,
        showextras : false,
        
      };
  
    showdetailsdeliver =() =>{
      this.setState({show:false});
      console.log(this.state.show + "Show = == == ");      
    }

    purchasecancel = () =>{
        this.setState({cancel:false});
    }
    OpenStartOrder = () => {
        this.setState({ openstartorder: !this.state.openstartorder});
        console.log("gg");
  }
  OpenShowExtras = () => {
    this.setState({ showextras: !this.state.showextras});
}
    OpenNextPage = (type) =>{
    this.props.history.push(type);}

      render(){


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
          
            <Auxilary>
                <motion.div     style = {pageStyle}
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                                    <img  alt=""  className = {classes.img} src = "pizza.jpg"></img> 
                <ListOfButtons
                showextras = {this.OpenShowExtras}
                clicked  = {this.OpenStartOrder}
                opennextpage = {this.OpenNextPage}/>
                <Modal show={this.state.openstartorder}
                        modalClosed = {this.purchasecancel}>
                  { this.state.show ?
                  <StartOrder 
                              pageStyle = {this.pageStyle}
                              pageVariants = {this.pageVariants}
                              pageTransition = {this.pageTransition}
                              goingback = {this.OpenStartOrder}
                              opennextpage = {this.OpenNextPage}
                              rotate = {this.showdetailsdeliver}
                              opendetailscustomer = {this.state.opendetailscustomer}></StartOrder>
                   :<motion.div     
                   initial="initial"
                   animate="in"
                   exit="out"
                   variants={pageVariants}
                   transition={pageTransition}> <DetailsDelivery/> </motion.div>}
                  </Modal>
                  <Modal show = {this.state.showextras} style="position:to">
                    <PizzaSlices></PizzaSlices>
                  </Modal>
                                  </motion.div>

            </Auxilary> 
        );
    }
}

export default HomePage;