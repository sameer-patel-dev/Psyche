import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Schedule } from './'


const StudentsUnderDetails = () => {
    const [assigndata, setAssignData] = useState([])
  
    useEffect(() => {
        fetch('/psychiatristprofile', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
          console.log(result.assigndetails)
          setAssignData(result.assigndetails)
        })
    },[])
  return (
  <div className="charts">
  <div className="charts__left">
      <div className="charts__left__title">
          <div>
              <h1>Your Scheduled Meetings</h1>
              <p>List of Students</p>
          </div>
          <i className="fa fa-usd" aria-hidden="true"></i>
      </div>
      
      {
            assigndata.map(item=>{
                return(
                    <div className="charts__right__cards_test">
                        <div className="psycheCard">
                            <h2>{item.s_name}</h2><br/>
                            <h2>{item.s_email}</h2>
                        </div> 

                        <div className="psycheCard">
                            <h2>{item.room_code}</h2><br/>
                            <Link to='/schedule'><button className="signin_button ghost" id="signUp">Schedule</button></Link>
                            
                            {/* <Schedule 
                            s_name = {item.s_name}
                            s_email = {item.s_email}
                             /> */}
                        </div>
                    </div>
                )
            })
        }      
        

  </div>
    <div className="charts__right">
        <div className="charts__right__title">
            <div>
                <h1>Students Under you</h1>
                <p>Student Details</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
        </div>

        <div className="charts__right__cards">
            {
            assigndata.map(item=>{
                return(
                    <div className="card1">
                            <h2>{item.s_name}</h2>
                            <h2>{item.s_email}</h2>
                    </div> 
                )
            })
        }           
        </div>

    </div>
    </div>
  );
};

export default StudentsUnderDetails;
