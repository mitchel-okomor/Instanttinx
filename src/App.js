import React, {createContext, useReducer} from "react";
import "./App.css";
import { Router, Switch, Route,  } from "react-router-dom";
import {reducer, initialState} from '../src/components/reducers/reducer'
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

import Admin from "./components/admin/admin";
import Edit from "./components/edit/edit";
import Home from "./components/home/home";
import History from "./components/services/history";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./components/about/about";

// const store = createStore(reducer);
export const myContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={{state, dispatch}}>
    <Router history={History}>
      <div className="App">
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </myContext.Provider>
  );
}

export default App;
