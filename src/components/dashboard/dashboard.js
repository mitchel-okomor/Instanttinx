import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
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
               <div className="d-details"></div>
            </div>
        </div>
    )
}

export default Dashboard;
