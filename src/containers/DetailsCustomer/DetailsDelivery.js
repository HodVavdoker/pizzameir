import React, { Component } from "react";
//import axios from '../../axios-orders';
import classes from "./DetailsDelivery.module.css";
import { motion } from "framer-motion";

class DetailsDelivery extends Component {
  state = {
    customerdetails: {
      number: "",
      firstname: "",
      lastname: "",
      city: "",
      address: "",
      numberaddress: "",
      appartment: "",
      entrance: "",
    },
  };

  editnumber = (event) => {
    this.setState({ numbertoadd: event.target.value });
  };
  editfirstname = (event) => {
    this.setState({ firstnametoadd: event.target.value });
  };
  editlastname = (event) => {
    this.setState({ lastnametoadd: event.target.value });
  };
  editcity = (event) => {
    this.setState({ citytoadd: event.target.value });
  };
  editaddress = (event) => {
    this.setState({ addresstoadd: event.target.value });
  };
  editnumberaddress = (event) => {
    this.setState({ numberaddresstoadd: event.target.value });
  };
  editappartment = (event) => {
    this.setState({ appartmenttoadd: event.target.value });
  };
  editentrance = (event) => {
    this.setState({ entrancetoadd: event.target.value });
  };

  //     AddToServer  = () =>{
  //       console.log(this.state.firstnametoadd);
  //       console.log(this.state.lastnametoadd);

  //       this.setState({customerdetails:{number   :"10",
  //                                       'firstname' :this.state.firstnametoadd,
  //                                       'lastname' :this.state.lastnametoadd,
  //                                       city :this.state.citytoadd,
  //                                       address :this.state.addresstoadd,
  //                                       numberaddress :this.state.numberaddresstoadd,
  //                                       appartment :this.state.appartmenttoadd,
  //                                       entrance :this.state.entrancetoadd,}});

  //       console.log(this.state.customerdetails.firstname);
  //          const customer = this.state.customerdetails;
  //          axios.post('/customers.json' , customer)
  //         .then(response => console.log(response))
  //         .catch(error => console.log(console.error));
  //         this.props.history.replace('/order');
  // }

  print = () => {
    console.log(this.state.customerdetails);
    console.log(this.state.firstnametoadd);
    console.log(this.state.lastnametoadd);
    this.setState({
      customerdetails: {
        firstname: this.state.firstnametoadd,
        lastname: this.state.lastnametoadd,
        city: this.state.citytoadd,
        address: this.state.addresstoadd,
        numberaddress: this.state.numberaddresstoadd,
        appartment: this.state.appartmenttoadd,
        entrance: this.state.entrancetoadd,
      },
    });
    console.log(this.state.customerdetails);
  };

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* <div className = {classes.center}> 
      <table className = {classes.table}>
        <tbody>
        <tr className = {classes.tr}>
          <td  className = {classes.td}>שם פרטי :</td>
          <td ><input  placeholder= "הוסף שם פרטי"
                       onChange = {(event)=>this.editfirstname(event)}></input></td>

          <td className = {classes.td}>שם משפחה : </td> 
          <td ><input  placeholder= "הוסף שם משפחה"
                       onChange = {(event)=>this.editlastname(event)}></input></td>

          <td className = {classes.td}>עיר :</td>
          <td >
              <select>
                <option value="Null">בחר עיר</option>
                <option value="Ramle">רמלה</option>
                <option value="Rishon Letzion">ראשון לציון</option>
                <option value="Rehovot">רחובות</option> 
              </select></td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td className = {classes.td}>רחוב :</td>
          <td ><input  placeholder= " הכנס רחוב"
                       onChange = {(event)=>this.editaddress(event)}></input></td>
          <td className = {classes.td}>מספר רחוב</td>
          <td><input placeholder= " הכנס מספר רחוב"
                     onChange = {(event)=>this.editnumberaddress(event)}></input></td>
          <td className = {classes.td}>דירה :</td>
          <td ><input  placeholder= "הכנס דירה"
                       onChange = {(event)=>this.editappartment(event)}></input></td>
        </tr>
        </tbody>
        <tbody>
        <tr>
        <td className = {classes.td}>כניסה</td>
        <td ><input  placeholder= "כניסה"
                     onChange = {(event)=>this.editentrance(event)}></input></td>
        <td><button className = {classes.button}
                    onClick = {this.AddToServer}>המשך</button></td>
        <td><button className = {classes.button}
                     onClick = {this.print}> ערוך</button></td>
        <td><button className = {classes.button}>  ביטול</button></td>
        </tr>
        </tbody>
      </table>
    </div> */}
        <div className={classes.form__group}>
          <ul className={classes.ul}>
            <li>
              <h3 className={classes.h3}>משלוח אלי</h3>
            </li>
            <li className={classes.li}>
              <input
                placeholder="הוסף שם פרטי"
                className={classes.form__field}
                onChange={(event) => this.editfirstname(event)}
              ></input>
            </li>
            <li className={classes.li}>
              <input
                placeholder="הוסף שם משפחה"
                className={classes.form__field}
                onChange={(event) => this.editlastname(event)}
              ></input>
            </li>
            <li className={classes.li}>
              <select>
                <option value="Null">בחר עיר</option>
                <option value="Ramle">רמלה</option>
                <option value="Rishon Letzion">ראשון לציון</option>
                <option value="Rehovot">רחובות</option>
              </select>
            </li>
            <li className={classes.li}>
              <input
                placeholder=" הכנס רחוב"
                className={classes.form__field}
                onChange={(event) => this.editaddress(event)}
              ></input>
            </li>
            <li className={classes.li}>
              <input
                placeholder=" הכנס מספר רחוב"
                className={classes.form__field}
                onChange={(event) => this.editnumberaddress(event)}
              ></input>
            </li>
            <li className={classes.li}>
              <input
                placeholder="הכנס דירה"
                className={classes.form__field}
                onChange={(event) => this.editappartment(event)}
              ></input>
            </li>
            <li className={classes.li}>
              <button className={classes.Buttoncon}>אישור והמשך</button>
            </li>
          </ul>
        </div>
      </motion.div>
    );
  }
}
export default DetailsDelivery;
