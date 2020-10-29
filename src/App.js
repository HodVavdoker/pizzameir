import React from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import Menu from "./components/Menu/Menu";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DetailsDelivery from "./containers/DetailsCustomer/DetailsDelivery";
import Pizza from "./components/Pizza/Pizza";
import SizeofPizza from "./components/SizeofPizza/SizeofPizza";
import Extras from "./components/Extras/Extras";
import Extra from "./components/Extras/Extra";
import Pasta from "./components/Pasta/Pasta";
import pizzaSlices from "./components/PizzaSlices/PizzaSlices";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Layout>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/homepage" component={HomePage} />
            <Route path="/Extraschoose" component={pizzaSlices} />
            <Route path="/Menu" component={Menu} />
            <Route path="/ChooseSize" component={SizeofPizza} />
            <Route path="/Sales" component={Pizza} />
            <Route path="/ChooseExtras" component={Extras} />
            <Route path="/Pastas" component={Pasta} />
            <Route path="/ChooseExtra" component={Extra} />
            <Route path="/detailsdelivery" component={DetailsDelivery} />
          </Switch>
        </AnimatePresence>
      </Layout>
    </div>
  );
};
export default App;
