import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Student.css";
import hello from "../../images/hello.svg";
import StudentChart from "./StudentChart";
import {Link,useHistory} from 'react-router-dom';

const Profile = ()=> {
    const [data,setData] = useState([])
    const [score1,setScore1] = useState(0)
    const [score2,setScore2] = useState(0)
    const [score3,setScore3] = useState(0)
    const [score4,setScore4] = useState(0)
    const [score5,setScore5] = useState(0)

    useEffect(() => {
        fetch('/studentprofile', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result.score[result.score.length - 1].score)
            console.log(result.testDetails)
            setData(result.details)
            if(result.testDetails.length > 0) {
                for(var x = 0; x < result.testDetails.length; x++) {
                    var testId = result.testDetails[x].testId;
                    var score = result.testDetails[x].score;
                    if(testId === 1) 
                        setScore1(score)
                    else if(testId === 2)
                        setScore2(score)
                    else if(testId === 3) 
                        setScore3(score)
                    else if(testId === 4)
                        setScore4(score)
                    else if(testId === 5)
                        setScore5(score)
                }
            }
        })
    },[])
    return (
        <main>
        {
            data.map(item=>{
                return(
                    <div className="admin__container">
                        <div className="admin__title">
                            <img src={hello} alt="hello" />
                            <div className="admin__greeting">
                                <h1>Hello {item.name}</h1>
                                <p>Welcome to your Dashboard</p>
                            </div>
                        </div>

                        <div className="admin__cards">
                            
                            <div className="card">
                                <FontAwesomeIcon icon="user" size="2x" style={{ color: '#35a4ba' }}/>
                                <div className="card__inner">
                                    <p className="text-primary-p">Name</p>
                                    <span className="font-bold text-title">{item.name}</span>
                                </div>
                            </div>

                            <div className="card">
                                <FontAwesomeIcon icon="venus-mars" size="2x" style={{ color: '#35a4ba' }}/>
                                <div className="card__inner">
                                    <p className="text-primary-p">Gender</p>
                                    <span className="font-bold text-title">{item.gender}</span>
                                </div>
                            </div>

                            <div className="card">
                                <FontAwesomeIcon icon="envelope" size="2x" style={{ color: '#35a4ba' }}/>
                                <div className="card__inner">
                                    <p className="text-primary-p">Email</p>
                                    <span className="font-bold text-title">{item.email}</span>
                                </div>
                            </div>

                            <div className="card">
                                <FontAwesomeIcon icon="phone" size="2x" style={{ color: '#35a4ba' }}/>
                                <div className="card__inner">
                                    <p className="text-primary-p">Phone Number</p>
                                    <span className="font-bold text-title">{item.phoneNo}</span>
                                </div>
                            </div>

                        </div>


                        <div className="charts">
                            <div className="charts__left">
                                <div className="charts__left__title">
                                    <div>
                                        <h1>Your Progress</h1>
                                        <p>based on Mental Health</p>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>
                                <StudentChart />
                                
                            </div>

                            <div className="charts__right">
                                <div className="charts__right__title">
                                    <div>
                                        <h1>Test Reports</h1>
                                        <p>Mental Health Assessments</p>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>


                                <div className="charts__right__cards">
                                    <div className="card1">
                                        <h2>Patient Health Questionaire</h2><br></br>
                                        <h2>{score1}</h2>
                                    </div>

                                    <div className="card2">
                                        <h2>Generalized Anxiety Disorder</h2><br></br>
                                        <h2>{score2}</h2>
                                    </div>

                                    <div className="card3">
                                        <h2>Obsess Compulsive Inventory</h2><br></br>
                                        <h2>{score3}</h2>
                                    </div>

                                    <div className="card1">
                                        <h2>Insomnia Severity Index</h2><br></br>
                                        <h2>{score5}</h2>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <Link to='/seeatc'>
                        <div className="atc_charts">
                            <div className="charts__right">
                                <div className="charts__right__title">
                                    <div>
                                        <h1>Check my Automatic Thought Challenges</h1>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        </Link>


                    </div>
                )
            })
        }
    </main>
    )
}

export default Profile