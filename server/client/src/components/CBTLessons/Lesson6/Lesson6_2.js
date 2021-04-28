import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
const Lesson6_2 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonBody">
            <div>
                <h3>Dealing with Setbacks - 2</h3>
                <br></br>
                <iframe className="videoLesson" src="https://www.youtube.com/embed/NFrqgegSsKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                    When you start to get an understanding of your emotional difficulties, CBT encourages you to break down a specific problem you have using the ABC format, in which:
                    <br></br>
                    <li>Adversity or activating event.</li>
                    <br></br>
                    <li>Your beliefs about the event. It involves both obvious and underlying thoughts about situations, yourself, and others.</li>
                    <br></br>
                    <li>Consequences, which includes your behavioral or emotional response.</li>
                </p>
                <h4>
                    Congratulations, You have successfully completed Lesson 6. Continue with further lessons to know more about CBT.
                </h4>
                <br></br>
                <Link to="/cbtlessons">
                    <button className="signin_button">Back to CBT Lessons</button>
                </Link>
            </div>
        </div>

        <nav className="footer">
            From, &nbsp; Teten, A. and Cully, J., 2008. A Therapist’s Guide to Brief Cognitive Behavioral Therapy. 1st ed. Houston: Department of Veterans Affairs, South Central Mental Illness Research, Education, and Clinical Center (MIRECC).
        </nav>

        </div>
    )
}

export default Lesson6_2
