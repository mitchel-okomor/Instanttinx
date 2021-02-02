import React, {
  createContext,
  useCallback,
  useReducer,
  useEffect,
} from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { reducer, initialState } from "../src/components/reducers/reducer";
import Login from "./components/login/login";
import checklogin from "./components/helpers/checkLogin";
import Signup from "./components/signup/signup";
import Admin from "./components/admin/admin";
import Edit from "./components/edit/edit";
import Home from "./components/home/home";
import History from "./components/services/history";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./components/about/about";
import NotFound from "./components/notfound/notfound";
import Eventdetails from "./components/event-details/event-details";
import {
  SET_CART,
  SET_LOADING,
  SET_TICKET_EVENTS,
  SERVER_URL,
  SET_USER,
} from "./components/helpers/constant";
import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";
import Events from "./components/events/events";
import Contact from "./components/contact/contact";
import Checkout from "./components/checkout/checkout";
import Payment from "./components/payment/payment";
import Pay from "./components/payment/pay";
import axios from "axios";
import aos from "aos";
import "aos/dist/aos.css";

// const store = createStore(reducer);
export const myContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Initialize animation function
  aos.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1300, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  const id = localStorage.getItem("userId");

  //fetch user info when app starts
  const fetchUser = useCallback(async () => {
    const url = SERVER_URL + "/api/user/" + id;

    if (id) {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        if (response.status === 200) {
          const data = response.data;
          dispatch({ type: SET_USER, payload: data });

          //  dispatch({ type: "SET_USER", payload: data });
        }
      } catch (error) {
        console.log(error);
      }
    }
    return;
  }, [id]);

  const fetchTicketEvents = useCallback(async () => {
    const url = SERVER_URL + "/api/events";
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const events = response.data;
        dispatch({ type: SET_TICKET_EVENTS, payload: events });
        dispatch({ type: SET_LOADING, payload: false });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_LOADING, payload: false });
    }
  }, []);

  const getCart = useCallback(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === "undefined" || !cart) {
      return [];
    } else {
      return cart;
    }
  }, []);

  useEffect(() => {
    checklogin();
    fetchUser();
    fetchTicketEvents();
    dispatch({ type: SET_CART, payload: getCart() });
  }, [fetchUser, fetchTicketEvents, getCart]);

  return (
    <myContext.Provider value={{ state, dispatch }}>
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
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/events" component={Events} />
            <Route path="/event/:id" component={Eventdetails} />
            <Route path="/payment/:id" component={Payment} />
            <Route path="/pay" component={Pay} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </myContext.Provider>
  );
}

export default App;
