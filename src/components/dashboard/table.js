import React, {useEffect, useContext} from 'react'
import './table.css'
import {myContext} from '../../App';
import Loading from '../loading/Loading';


function Table() {


  const {state}=useContext(myContext);
  const {loading, userEvents} = state;
  
 
 
console.log(userEvents);
if(loading){
  return <Loading />
}

    return (
        <div className="admin-table">
            <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Venue</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
      <th scope="col">Publish</th>
      <th scope="col">Action</th>

    </tr> 
  </thead>
  <tbody>
{userEvents.map(({title, venue, date, _id, isApproved, isPublished})=>{
return  <tr key={_id}>
      <th scope="row">1</th>
<td>{title}</td>
<td>{venue}</td>
<td>{date}</td>
<td className="font-weigth-bold">{isApproved?"Approved":"Pending Approval"}</td>
<td>{isPublished?"published" : "Drafted"}</td>
<td><span><button className="btn btn-primary">Edit</button ></span> <span><button className="btn btn-danger">Delete</button></span> {!isPublished? <span><button className="btn btn-secondary">Publish</button></span>:""}</td>
    </tr>
})}
    
  </tbody>
</table>
        </div>
    )
}

export default Table
