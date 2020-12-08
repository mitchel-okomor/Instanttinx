import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Table from './table';
import axios from 'axios';
import { SERVER_URL, SET_USER_EVENTS, SET_LOADING } from "../helpers/constant";
import {myContext} from '../../App';
import Loading from '../loading/Loading';


function Dashboard() {
  const {state, dispatch}=useContext(myContext);
const {loading, user} = state;

useEffect(()=>{
fetchEvents();
},[])

const fetchEvents = async ()=>{
  const url = SERVER_URL + "/events/" + localStorage.getItem("userId");
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axios.get(url, {
        headers: {
          "Authorization": localStorage.getItem('token')
      },
        timeout: 30000,
      });
      if (response.status === 200) {
        const events = response.data;
        console.log("Events: "+JSON.stringify(events));
        dispatch({ type: SET_USER_EVENTS, payload: events });
        dispatch({ type: SET_LOADING, payload: false });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_LOADING, payload: false });
    }
  };


if(loading){
  return <Loading />
}
    return (
        <div className="dashboard"> 
            <h3 className="m-3">Dashboard</h3>
            <div className="row">
                <div className="col-ms-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
<div className="total-events p-3">106 Events</div>
                </div>
                <div className="col-ms-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div className="published-events p-3">13 Published </div>    
                    </div>
                    <div className="col-ms-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                 <div className="completed-events p-3"> 30 Completed</div>  
                    </div>
                    <div className="col-ms-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div className="drafted-events p-3">59 Drafted</div>  
                    </div>
            </div>
            <div>
               <div className="d-header">
                 <div className="row mt-4 p-2">
                     <div className="col-ms-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
<div><Link to="/admin/create-event" className="btn btn-primary bold">Create Event</Link></div>
                     </div>
                     <div className="col-ms-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
<div><form>
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit"><i class="fa fa-search" ></i></button>
    </form></div>
                     </div>
                     <div className="col-ms-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
<div>details</div>
                     </div>
                     <div className="col-ms-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
<div>details</div>
                     </div>
                     </div>  
                   </div> 
               <div className="d-details">
             <Table />
               </div>
            </div>
        </div>
    )
}

export default Dashboard;
