import React from 'react';
import {Link} from 'react-router-dom';
import './AspmtHomePage.css';

const Aspmt = ()=> {
    return (
        <div className="AspmtHomePage_body">
        <div className="AspmtHomePage_container">
            
                <div className="AspmtHomePage_card">
                    <div className="AspmtHomePage_circle">
                        <h2>01</h2>
                    </div>
                    <div className="AspmtHomePage_content">
                        <h4>Patient Health Questionare <br></br> PHQ-9</h4>
                        <br></br>
                        <p>Take this 9-question instrument which is a primary care setting to screen for the presence and severity of depression.</p>
                        <a><Link to="/exercise/aspmts/test1">Click here to take Test!</Link></a>
                    </div>
                </div>

            
                <div className="AspmtHomePage_card">
                    <div className="AspmtHomePage_circle">
                        <h2>02</h2>
                    </div>
                    <div className="AspmtHomePage_content">
                        <h4>Generalized Anxiety Disorder <br></br> GAD-7</h4>
                        <br></br>
                        <p>This is a 7-item instrument that is used to measure or assess the severity of generalised anxiety disorder</p>
                        <a><Link to="/exercise/aspmts/test2">Click here to take Test!</Link></a>
                    </div>
                </div>

            <div className="AspmtHomePage_card">
                <div className="AspmtHomePage_circle">
                    <h2>03</h2>
                </div>
                <div className="AspmtHomePage_content">
                    <h4>Obsessive Compulsive Inventory<br></br> OCI-R</h4>
                    <br></br>
                    <p>This is a self-rating scale that is designed to assess the severity and type of symptoms of those potentially dealing with OCD.</p>    
                    <a><Link to="/exercise/aspmts/test3">Click here to take Test!</Link></a>
                </div>
            </div>

            <div className="AspmtHomePage_card">
                <div className="AspmtHomePage_circle">
                    <h2>04</h2>
                </div>
                <div className="AspmtHomePage_content">
                    <h4>Insomnia Severity Index <br></br> ISI</h4>
                    <br></br>
                    <p>It is an instrument that assesses the severity of both nighttime and daytime components of insomnia</p>
                    <a><Link to="/exercise/aspmts/test5">Click here to take Test!</Link></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Aspmt
