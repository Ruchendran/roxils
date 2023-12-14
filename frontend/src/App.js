
import {Component} from "react"

import { BrowserRouter,Route,Switch } from "react-router-dom";

import Get from "./components/Get"

import Stastics from "./components/Stastics"

import BarGraph from "./components/Bar"

import PieGraph from "./components/Pie"


class App extends Component{
  render(){
    return(

      <BrowserRouter>
      <Switch>
        <Route exact path="/get" component={Get} />
        <Route  exact path="/stastics" component={Stastics} />
        <Route exact path="/bar" component={BarGraph} />
        <Route exact path="/pie" component={PieGraph} />
      </Switch>

      </BrowserRouter>
    )
  }
}

export default App;
