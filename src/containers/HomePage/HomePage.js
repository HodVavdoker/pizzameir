import React, { Component } from "react";
import classes from "./HomePage.module.css";
import ListOfButtons from "../../components/ListofButtons/ListofButtons";
import StartOrder from "../../components/StartOrder/StartOrder";
import Modal from "../../components/Modal/Modal";
import DetailsDelivery from "../../containers/DetailsCustomer/DetailsDelivery";
import PizzaSlices from "../../components/PizzaSlices/PizzaSlices";
import { MotionDiv } from "../../shared/MotionDiv";

class HomePage extends Component {
  state = {
    openstartorder: false,
    openmenu: false,
    opendetailscustomer: false,
    cancel: true,
    show: true,
    showextras: false,
  };

  showdetailsdeliver = () => {
    this.setState({ show: false });
    console.log(this.state.show + "Show = == == ");
  };

  purchasecancel = () => {
    this.setState({ cancel: false });
  };
  OpenStartOrder = () => {
    this.setState({ openstartorder: !this.state.openstartorder });
    console.log("gg");
  };
  OpenShowExtras = () => {
    this.setState({ showextras: !this.state.showextras });
  };
  OpenNextPage = (type) => {
    this.props.history.push(type);
  };

  render() {
    return (
      <>
        <MotionDiv>
          <img alt="" className={classes.img} src="pizza.jpg"></img>
          <ListOfButtons
            showextras={this.OpenShowExtras}
            clicked={this.OpenStartOrder}
            opennextpage={this.OpenNextPage}
          />
          <Modal
            show={this.state.openstartorder}
            modalClosed={this.purchasecancel}
          >
            {this.state.show ? (
              <StartOrder
                pageStyle={this.pageStyle}
                pageVariants={this.pageVariants}
                pageTransition={this.pageTransition}
                goingback={this.OpenStartOrder}
                opennextpage={this.OpenNextPage}
                rotate={this.showdetailsdeliver}
                opendetailscustomer={this.state.opendetailscustomer}
              ></StartOrder>
            ) : (
              <MotionDiv>
                <DetailsDelivery />
              </MotionDiv>
            )}
          </Modal>
          <Modal show={this.state.showextras} style="position:to">
            <PizzaSlices></PizzaSlices>
          </Modal>
        </MotionDiv>
      </>
    );
  }
}

export default HomePage;
