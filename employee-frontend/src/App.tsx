import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import PerformanceReview from "./components/Employee/PerformanceReview";
import Create from "./components/Employee/Create";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className={"container"}>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/employee/:employeeID"} component={PerformanceReview} />
          <Route path={"/create"} component={Create} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
