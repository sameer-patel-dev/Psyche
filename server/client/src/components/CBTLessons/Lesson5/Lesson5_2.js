import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
const Lesson5_2 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonBody">
            <div>
                <h3>Cognitive and Behavorial Strategies - 2</h3>
                <br></br>
                <iframe className="videoLesson" src="https://www.youtube.com/embed/JiDaTi_iQrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                    Have you ever worn the perspective that shows an ugly side to everything; makes you look like a nightmare, make friends look like monsters and situations into catastrophes. If you have ever felt this way our experienced such a bad day, chances are that you have worn this wrong perspective which is actually called experiencing Cognitive Distortions.

By eradicating and reducing these unhealthy thoughts, you can change your mood and your life.
Cognitive Distortions are alleviated by Cognitive Behavioral Therapy , which improves lifes by possibly changing thoughts, beliefs and attitudes. 
	“Remember it isn't the situation, but the thoughts that upset you.”
We can bifercate this into 10 types of distortions:<br></br><br></br>
We overgeneralise
	One failure means we ll always fail, or a small mistake means the person always behaves or acts that way. This way of ‘All or Nothing’ thinking where we pigeonhole our thinking to total success or total failure without a nuance of growth causes growth of suffocating characteristic of thoughts. This could often lead to mistrust and denial.
Mentally Filer and Only see the negative.
	We focus on one bad grade in tests and not see all the other good scores so far. We hold to one bad mistake of a person rather than noticing all the other good deeds done by the person. This method of disqualifying the positives and consequently turning good things into bad leads us to misjudging even a genuine compliment for a manipulative or condescending statement.
<br></br><br></br>
Jumping to conclusions
We read minds, falsely accusing that someone is thinking bad about us. We fortunetell the bad outcomes for our future.We wrongly personalise and catastrophize thinking that we are responsible for something that we had actually nothing to do with.

                </p>
                <h4>
                    Congratulations, You have successfully completed Lesson 5. Continue with further lessons to know more about CBT.
                </h4>
                <br></br>
                <Link to="/cbtlessons">
                    <button className="signin_button">Back to CBT Lessons</button>
                </Link>
            </div>
        </div>

        <nav className="footer">
            From, &nbsp; Burns, David D. Feeling Good: The New Mood Therapy. New York, N.Y: Penguin Books, 1981.
        </nav>

        </div>
    )
}

export default Lesson5_2
