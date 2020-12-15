import React, {useState, useContext} from 'react'
import './create.css';
import {myContext} from '../../App';
import { useParams} from 'react-router-dom';
import history from "../services/history";
import axios from 'axios';
import {SERVER_URL, SET_LOADING, SET_USER_EVENTS} from '../helpers/constant';
import Loading from "../loading/Loading";





function Create() {
  let { _id } = useParams();
  // const dispatch = useDispatch();
  const {state, dispatch}=useContext(myContext);
  const { loading, user, userEvents} = state;


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [venue, setVenue] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [image, setImage] = useState('');
const [price, setPrice] = useState('');
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
            setDate(e.target.value);
            break;
        case "price":
            setPrice(e.target.value);
            break;
        case "image":
            setImage(e.target.files[0]);
            break;
        default:
            setTime(e.target.value)
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
formData.append("price", price);

    const url = SERVER_URL + "/api/event";
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axios.post(url, formData,{
        headers: {
          "Authorization": localStorage.getItem('token')
      }}, {
        timeout: 30000,
      });
      if (response.status === 200) {
        console.log(response.data.data);
        const data =response.data.data ;
        console.log("create: "+ data);
      userEvents.push(data);
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({type:SET_USER_EVENTS, payload: userEvents })
        console.log(userEvents);
        history.goBack();
      }
    } catch (error) {
      console.log(error);
      setMessage("failed to save ")
      dispatch({ type: SET_LOADING, payload: false });
    }
  };


if (loading) {
  return <Loading />
}
    return (
        <div className="d-flex justify-content-center mt-5 pt-5">
         <form onSubmit={handleSubmit}> 
         <h2 className="mb-5">Create Event</h2> <br/>
             <div>
            <label htmlFor="title">Event Title:</label><br />
            <input type="text" name="title" id="title" required onChange={handleChange}/>
             </div>
             <div>
            <label htmlFor="description">Description:</label><br />
            <textarea type="text" name="description" id="description" required onChange={handleChange}/>
             </div>
             <div>
            <label htmlFor="venue">Venue:</label><br />
            <input type="text" name="venue" id="venue" required onChange={handleChange}/>
             </div>
             <div>
            <label htmlFor="date">Date:</label><br />
            <input type="date" name="date" id="date" required onChange={handleChange}/>
             </div>
             <div>
            <label htmlFor="time">Time:</label><br />
            <input type="time" name="time" id="time" required onChange={handleChange}/>
             </div>
             <div>
            <label htmlFor="price">Price:</label><br />
            <input type="price" name="price" id="price" onChange={handleChange}/>
             </div>
             <div>
            <label htmlFor="image">Event Flyer:</label> <br />
            <input type="file" name="image" id="image"  onChange={handleChange}/>
             </div>
             <div>
        <button type="submit">Submit</button>
             </div>
         </form>
        </div>
    )
}

export default Create
