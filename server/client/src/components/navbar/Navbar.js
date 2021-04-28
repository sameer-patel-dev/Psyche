import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../../App'
import "./Navbar.css";
import avatar from "../../images/avatar.svg";


const Navbar = () => {
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()

  const renderList = ()=>{
    if(state)
    {
      if(state.role == 'admin')
      {
        return [
          <Link to="/admin">Dashboard</Link>,
          <Link to="/admin/add">Add a Psychiatrist</Link>,
          <Link to="/admin/assign">Assign a Psychiatrist</Link>,
          <Link to="/admjoin">Chatroom</Link>,
          <Link to="/signin" onClick={()=>{
                                            localStorage.clear()
                                            dispatch({type:"CLEAR"})
                                            history.push('/signin')
                                      }}>SignOut
          </Link>,
          <a>
            <img width="30" src={avatar} alt="avatar" />
          </a>
              ]
      }

      else if(state.role == 'psychiatrist')
      {
        return [
          <Link to='/psychiatrist'>Profile</Link>,
          <Link to='/allatc'>Check User's ATC</Link>,
          <Link to='alltests'>Check User's Tests</Link>,
          <Link to="/psyjoin">Chatroom</Link>,
          <Link to="/signin" onClick={()=>{
                                            localStorage.clear()
                                            dispatch({type:"CLEAR"})
                                            history.push('/signin')
                                      }}>SignOut
          </Link>,
          <a>
            <img width="30" src={avatar} alt="avatar" />
          </a>
              ]
      }

      else if(state.role == 'student')
      {
        return [
          <Link to="/student">Profile</Link>,
          <Link to="/cbtlessons">CBT Lessons</Link>,
          <Link to="/exercise">CBT Exercises</Link>,
          // <Link to='/watson'>Virtual Psychiatrist</Link>,
          <a target="_blank" href="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=a8d84f78-f956-44ab-8180-76b9a2f25023&serviceInstanceID=dac2ad4d-8952-413d-b955-7a18712f6007">Virtual Psychiatrist</a>,
          <Link to="/join">Psychiatrist</Link>,
          <Link to="/signin" onClick={()=>{
                                localStorage.clear()
                                dispatch({type:"CLEAR"})
                                history.push('/signin')
                            }}>SignOut
          </Link>,
          <a>
            <img width="30" src={avatar} alt="avatar" />
          </a>
              ]
      }
        
    }

    else
    {
        return [
          <Link to="/signin">SignIn</Link>,
          <Link to="/signup">SignUp</Link>,
              ]
    }

}



  return (
    <nav className="navbar">

      <div className="navbar__left">
        <Link to='/'>PSYCHE</Link>
      </div>

      <div className="navbar__right">
        {renderList()}
      </div>
    </nav>
  );
};

export default Navbar;
