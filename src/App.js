import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import {Route , Switch} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"
import DetailsDelivery from './containers/DetailsCustomer/DetailsDelivery';
import Pizza from './components/Pizza/Pizza';
import SizeofPizza from './components/SizeofPizza/SizeofPizza';
import Extras from './components/Extras/Extras';
import Extra from './components/Extras/Extra';

class App extends Component{
  render(){
    return (
      <div>
  
        <Layout>
        <AnimatePresence>
          <Switch>
            <Route path = "/homepage"  component= {HomePage}/>
            <Route path = "/Menu"  component= {Menu}/>
            <Route path = "/ChooseSize"  component= {SizeofPizza}/>
            <Route path = "/Sales"  component= {Pizza}/>
            <Route path = "/ChooseExtras"  component= {Extras}/>
            <Route path = "/ChooseExtra"  component= {Extra}/>
            <Route path = "/detailsdelivery"  component= {DetailsDelivery}/>
          </Switch>
          </AnimatePresence>
        </Layout>
        
      </div>
    );
  }
}
export default App;
