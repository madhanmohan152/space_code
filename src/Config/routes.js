import React from "react";
import { Route } from "react-router-dom";
import Home from '../Pages/Home'
import WatchList from "../Pages/WatchList";

const BaseRouter = (props) => (
  <div>
    {/* route starts here */}
    <Route exact path="/Home" component={Home} />
    <Route exact path="/watch_list" component={WatchList} />

  </div>
);

export default BaseRouter;
