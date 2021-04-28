import React from 'react';
import {Link,useHistory} from 'react-router-dom';

const CBTLessons = () => {
    const history = useHistory()
    return (
    <div>
        <div className="exercise_body">
            <div className="exercise_container">

                <Link to="/cbtlessons/1_1">
                    <div className="exercise_card">
                        <div className="exercise_box">
                            <div className="exercise_content">
                                <h2>01</h2>
                                <h3>Introduction</h3>
                                <br></br>
                                <p>Learn more about Cognitive Behavioral Therapy and how it can help you!</p>
                                <a>Learn More</a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/cbtlessons/2_1">
                    <div className="exercise_card">
                        <div className="exercise_box">
                            <div className="exercise_content">
                                <h2>02</h2>
                                <h3>Cognitive Distortions</h3>
                                <br></br>
                                <p>Learn and understand more about different Cognitive Distortions here! </p>
                                <a>Learn More</a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/cbtlessons/3_1">
                    <div className="exercise_card">
                        <div className="exercise_box">
                            <div className="exercise_content">
                                <h2>03</h2>
                                <h3>Belief System</h3>
                                <br></br>
                                <p>Learn and understand more about Core Beliefs in Cognitive Behavioral Therapy!</p>
                                <a>Learn More</a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/cbtlessons/4_1">
                    <div className="exercise_card">
                        <div className="exercise_box">
                            <div className="exercise_content">
                                <h2>04</h2>
                                <h3>Problems, Solutions and Goals</h3>
                                <br></br>
                                <p>Learn and understand how goals and objectives can help in improving mental health! </p>
                                <a>Learn More</a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/cbtlessons/5_1">
                    <div className="exercise_card">
                        <div className="exercise_box">
                            <div className="exercise_content">
                                <h2>05</h2>
                                <h3>Cognitive and Behavioral Strategies</h3>
                                <br></br>
                                <p>Try and understand more about different Cognitive Behavioral Strategies</p>
                                <a>Learn More</a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/cbtlessons/6_1">
                    <div className="exercise_card">
                        <div className="exercise_box">
                            <div className="exercise_content">
                                <h2>06</h2>
                                <h3>Dealing with Setbacks</h3>
                                <br></br>
                                <p>Try and understand more about how to deal with setbacks! </p>
                                <a>Learn More</a>
                            </div>
                        </div>
                    </div>
                </Link>
            
            </div>
        </div>

        <nav className="footer">
            <p>From: </p> &nbsp;Resiliens Inc, n.d. CBT Companion App. Resiliens Service.
        </nav>
    </div>
    )
}

export default CBTLessons
