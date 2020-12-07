import React, {useState, useContext} from 'react'

import {myContext} from '../../App';
import {Link} from 'react-router-dom';
import history from "../services/history";
import axios from 'axios';
import {SERVER_URL, SET_LOADING, SET_USER} from '../helpers/constant';
import Loading from "../loading/Loading";





function Create() {
  // const dispatch = useDispatch();
  const {state, dispatch}=useContext(myContext);
  const { loading, user} = state;


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [venue, setVenue] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [image, setImage] = useState('');
const [message, setMessage] = useState('');

const handleChange = (e)=>{
    switch(e.target.name){
        case "title":
            setTitle(e.target.value);
            break;
        case "description":
            setDescription(e.target.value);
            break;
        case "venue":
            setVenue(e.target.value);
            break;
        case "date":
            setDate(e.target.date);
            break;
        case "image":
            setImage(e.target.files[0]);
        default:
            setTime(e.target.time)
    }

}

const handleSubmit = async (e) => {
    e.preventDefault();

const formData = new FormData();
formData.append("title", title);
formData.append("description", description);
formData.append("venue", venue);
formData.append("date", date);
formData.append("time", time);
formData.append("image", image);
formData.append("userId", user._id);

    const url = SERVER_URL + "/event";
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await axios.post(url, formData,{
        headers: {
          "Authorization": localStorage.getItem('token')
      }}, {
        timeout: 30000,
      });
      if (response.status === 200) {
        console.log(response);
        dispatch({ type: "SET_LOADING", payload: false });
        history.push("/admin");
      }
    } catch (error) {
      console.log(error);
      setMessage("failed to save ")
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

if(loading){
 return <Loading />
}
    return (
        <div>
         <form onSubmit={handleSubmit}> 
             <div>
            <label for="title">Event Title:</label><br />
            <input type="text" name="title" id="title" onChange={handleChange}/>
             </div>
             <div>
            <label for="description">Description:</label><br />
            <textarea type="text" name="description" id="description" onChange={handleChange}/>
             </div>
             <div>
            <label for="venue">Venue:</label><br />
            <input type="text" name="venue" id="venue" onChange={handleChange}/>
             </div>
             <div>
            <label for="date">Date:</label><br />
            <input type="date" name="date" id="date" onChange={handleChange}/>
             </div>
             <div>
            <label for="time">Time:</label><br />
            <input type="time" name="time" id="time" onChange={handleChange}/>
             </div>
             <div>
            <label for="image">Event Flyer:</label> <br />
            <input type="file" name="image" id="image" onChange={handleChange}/>
             </div>
             <div>
        <button type="submit">Submit</button>
             </div>
         </form>
        </div>
    )
}

export default Create
