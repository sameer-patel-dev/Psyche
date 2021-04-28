import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
const Lesson3_1 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonBody">
            <div>
                <h3>Belief System - 1</h3>
                <br></br>
                <iframe className="videoLesson" src="https://www.youtube.com/embed/juNuGdd_Cc0" title="YouTube video player" frameborder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                <p>
                For any achievement and for any kind of challenge accomplishment, one needs to be motivated with raw and stubborn determination. He/she cannot be successful if not dogged for achieving that goal.
 One of the most important sources of motivation is your Belief System . Its your belief System that is your most powerful strength. Even Nelson Mendela was able to survive jail time, oppression, battering and alot of suffering . Not because of any incentive as there was nothing to incentivize him then, but because he had a strong belief system.
 <br></br><br></br>
  Mankind has only been able to make history, or achieve a feat of success because of his/her belief system. You can have a belief system which can be strong, can be weak ,can be ordinary or can be extraordinary. Once an North eastern Indian girl Mary Kom saw a boxing match between someone from her village and an international boxer. Since then she was determined and she was adamant that she wants to train hard and become an Olympic boxer that she is now. It's because of her strong will power and belief system that motivated her throughout the path of winning three gold medals and many more accolades whilst representing her country.it didnt matter that she had never boxed before nor did it matter that she was about 30 years old when she started training for the Olympic boxing journey but when someone has a strong belief system and will power they can achieve any feat of achievement and can claim victory over paths of even the highest level of difficulty no matter what the circumstances are. ordinary people generally live the ordinary life grow up to be an ordinary person and leave the world with just an ordinary history.but it's dose extraordinary people who actually leave a mark and legacy that motivates inspires others.

                </p>
                <Link to="/cbtlessons/3_2">
                    <button className="signin_button">Next Lesson</button>
                </Link>
            </div>
        </div>

        </div>
    )
}

export default Lesson3_1
