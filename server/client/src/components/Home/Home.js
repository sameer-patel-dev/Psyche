import React from 'react'
import image1 from '../../images/idCard.png'
import wave from '../../images/wave.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Home.css'
import img1 from './1.png';
import img2 from './2.jpg';
import img3 from './3.png';
import img4 from './4.png';


const Home = ()=> {
    return (
        <div>
            <section id="banner">
                <div className="container">
                    <p style = {{textAlign:"center", marginTop: "70px"}}><FontAwesomeIcon icon="user-nurse" size="5x" /></p>
                    <p className="promo-title">PSYCHE</p>
                    <h3 style = {{textAlign:"center"}}>MENTAL HEALTH APPLICATION FOR STUDENTS HAVING EXAM STRESS WITH CBT EXPERTISE VIRTUAL ASSISTANT</h3>
                    <div class="Home_row">
                        <div class="Home_column">
                            <div class="Home_card">
                            <h3>Cognitive Behavioral Therapy</h3>
                            <img src={img1} height="260" width="260"></img>
                            </div>
                        </div>

                        <div class="Home_column">
                            <div class="Home_card">
                            <h3>Integrated Virtual Assistant</h3>
                            <img src={img2} height="260" width="260"></img>
                            </div>
                        </div>
                        
                        <div class="Home_column">
                            <div class="Home_card">
                            <h3>Personalized Dashboard</h3>
                            <img src={img3} height="260" width="300"></img>
                            </div>
                        </div>
                        
                        <div class="Home_column">
                            <div class="Home_card">
                            <h3>Mental Health Exercises</h3>
                            <img src={img4} height="260" width="260"></img>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            
        </div>
    )
}

export default Home
