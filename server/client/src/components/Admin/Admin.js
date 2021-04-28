import React,{useState, useEffect} from 'react'
import "./Admin.css";
import hello from "../../images/hello.svg";
import Chart from "./AdminChart";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Admin = () => {
  const [data,setData] = useState([])

  useEffect(() => {
      fetch('/allusers', {
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result=>{
        console.log(result)
        setData(result.details)
      })
  },[])

  return (
    <main>
      <div className="admin__container">
        <div className="admin__title">
          <img src={hello} alt="hello" />
          <div className="admin__greeting">
            <h1>Hello Admin</h1>
            <p>Welcome to your Admin dashboard</p>
          </div>
        </div>

        <div className="admin__cards">
          <div className="card">
              <FontAwesomeIcon icon="users" size="2x" style={{ color: '#35a4ba' }}/>
            <div className="card_inner">
              <p className="text-primary-p">Total Number of Users</p>
              <span className="font-bold text-title">9</span>
            </div>
          </div>

          <div className="card">
            {/* <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i> */}
            <FontAwesomeIcon icon="user-nurse" size="2x" style={{ color: '#35a4ba' }}/>
            <div className="card_inner">
              <p className="text-primary-p">Number of Psychiatrists</p>
              <span className="font-bold text-title">2</span>
            </div>
          </div>

          <div className="card">
          <FontAwesomeIcon icon="user" size="2x" style={{ color: '#35a4ba' }}/>
            <div className="card_inner">
              <p className="text-primary-p">Number of Students</p>
              <span className="font-bold text-title">7</span>
            </div>
          </div>

          <div className="card">
             <FontAwesomeIcon icon="bell" size="2x" style={{ color: '#35a4ba' }}/>
            <div className="card_inner">
              <p className="text-primary-p">Number of live sessions currently</p>
              <span className="font-bold text-title">3</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>User Reports</h1>
                <p>Total Users and Active Users</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
            <div className="graphInfo">
              <div className="colorBox1"></div>
              <p>Total Number of Users in the system</p>
              <div className="colorBox2"></div>
              <p>Number of Active Users in the system</p>
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>User Reports</h1>
                <p>Different Users</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
            {
            data.map(item=>{
              return(
              <div className="psycheCard">
                <h1>{item.name}</h1>
                <p>{item.role}</p>
              </div>
              )
            })
          }
              

            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Admin;
