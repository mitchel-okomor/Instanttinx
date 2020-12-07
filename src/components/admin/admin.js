import React from 'react';
import './admin.css';
import withAuth from '../services/withAuth';
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import Dashboard from '../dashboard/dashboard';
import Adminevents from '../adminevents/adminevents';
import Create from '../create/create';
import History from '../services/history';


const Admin = () =>{
    const { url, path } = useRouteMatch();


    return (<div className="admin">
<div className="row">
    <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-ms-12 bg-blue pl-0">
    <div>
<div className="dashboard-image px-4 ">
    <img src={require("../../images/dummy.jpg")} />
    <h3 className="mt-2">John Doe</h3>
    <h5>Event Organiser</h5>
    <div className="row n-area ">
        <div className="col-6 notification py-2">
        <i class="fa fa-bell" aria-hidden="true"></i>
        </div>
        <div className="col-6 settings py-2">
        <i class="fa fa-cog" aria-hidden="true"></i>

        </div>

    </div>
</div>

<div className="side pt-5 ">
<h4 className="mx-4 ">Navigation</h4>
<ul className="px-3 ">
<li><Link to={`${url}`}><i class="fa fa-tachometer" aria-hidden="true"></i>
Dashboard</Link></li>
<li><Link to={`${url}/events`}><i class="fa fa-th-large" aria-hidden="true"></i>
All Events</Link></li>
<li><Link to="/posted-events"><i class="fa fa-th-large" aria-hidden="true"></i>
Posted Events</Link></li>
<li><Link to="/draft"><i class="fa fa-minus-square" aria-hidden="true"></i>
Draft Events</Link></li>
<li><Link to="/completed"><i class="fa fa-circle" aria-hidden="true"></i>
completed Events</Link></li>
</ul >
<div className="text-center mt-5"><button className="btn-success">Logout</button></div>
</div>
    </div>
    </div>
    <div className="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-ms-12">
      <Switch>
          <Route path={`${path}/events`} component={Adminevents} />
   
          <Route path="/admin/create-event" component={Create} />
    <Route component={Dashboard} />
    </Switch>
    </div>
</div>
    </div> )
}


export default withAuth(Admin);