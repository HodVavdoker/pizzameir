import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './HomePage.module.css';
import ListOfButtons from '../../components/ListofButtons/ListofButtons';
import StartOrder from '../../components/StartOrder/StartOrder';
import Menu from '../../components/Menu/Menu';
import Modal from '../../components/Modal/Modal';
import Modalx from '../../components/Modal/Modalx';
import DetailsDelivery from '../../containers/DetailsCustomer/DetailsDelivery';
import { useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

class HomePage extends Component{
    
    state = {
        openstartorder : false,
        openmenu : false,
        opendetailscustomer : false,
        cancel : true,
        show : false,
      };
  
    showdetailsdeliver =()=>{
      this.setState({ show: !this.state.show});
      
    }

    purchasecancel = () =>{
        this.setState({cancel:false});
    }
    OpenStartOrder = () => {
        this.setState({ openstartorder: !this.state.openstartorder});
        console.log("gg");
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
          duration: 0.5
        };

        return(
          
            <Auxilary>
             
                <motion.div     
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                <img    className = {classes.img} src = "pizza.jpg"></img> 
                <ListOfButtons
                clicked  = {this.OpenStartOrder}
                opennextpage = {this.OpenNextPage}/>
                <Modal show={this.state.openstartorder}
                        modalClosed = {this.purchasecancel}>
                  <StartOrder goingback = {this.OpenStartOrder}
                              opennextpage = {this.OpenNextPage}
                              rotate = {this.showdetailsdeliver}
                              opendetailscustomer = {this.state.opendetailscustomer}>
                    { this.state.show ?              
                              <motion.div     
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                                  <DetailsDelivery/>
                                  </motion.div>: null}
                  </StartOrder>
                </Modal>
                </motion.div>
               
            </Auxilary> 
        );
    }
}

export default HomePage;