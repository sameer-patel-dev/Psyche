import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
const Lesson4_2 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonBody">
            <div>
                <h3>Problems, Solutions and Goals - 2</h3>
                <br></br>
                <iframe className="videoLesson" src="https://www.youtube.com/embed/1kLZJeFNP94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    Congratulations, You have successfully completed Lesson 4. Continue with further lessons to know more about CBT.
                </h4>
                <br></br>
                <Link to="/cbtlessons">
                    <button className="signin_button">Back to CBT Lessons</button>
                </Link>
            </div>
        </div>

        <nav className="footer">
            From, &nbsp; Bradley, B. and Furrow, J., 2013. Cognitive Behavioural Therapy for Dummies

        </nav>

        </div>
    )
}

export default Lesson4_2
