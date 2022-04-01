import { Routes as Switch, Route } from "react-router-dom";
import Products from "../components/Products";
import Home from "../pages/Home";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Switch>
  );
};

export default Routes;
