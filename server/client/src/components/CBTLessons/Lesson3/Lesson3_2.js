import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
const Lesson3_2 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonBody">
            <div>
                <h3>Belief System - 2</h3>
                <br></br>
                <iframe className="videoLesson" src="https://www.youtube.com/embed/vu7_iFVAaJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                    Cognitive Behavorial Therapy is a form of psychotherapy that talk about:
                    <li>How you think about yourself, the world and other people?</li>
                    <li>How what you do affects your thoughts and feelings?</li>
                    <br/>
                    CBT can help you to change how you think ("Cognitive") and what you do ("Behavior"). These changes can help you to feel better. Unlike some of the other talking treatments, it focuses on the "here and now" problems and difficulties. Whilst it is often useful to discuss the past and understand how our pasts have influenced our lives and how problems have arisen, CBT mostly focuses on looking for ways to improve your mental wellbeing now. CBT says that it's not the event which causes our emotions, but how we interpret that event - what we think or what meaning we give that event or situation.
                    <br/><br/>
                    For instance, if someone you know passes you in the street without acknowledging you, you can interpret it several ways. You might think they don't want to know you because no-one likes you (which may lead you to feel depressed), your thought may be that you hope they don't stop to talk to you, because you won't know what to say and they'll think you're boring and stupid (anxiety), you may think they're being deliberately snotty (leading to anger).
                    <br/><br/>
                    A healthier response might be that they just didn't see you. Another example may be someone who's depressed might wake up in the morning and think: "This is going to be another awful day", "I'm going to mess up again", or "What's the point of anything?", which will make them feel even more depressed (feelings), and may prompt them to pull the covers over their head and stay in bed (behaviors). It's very likely that this will increase their negative thoughts, which in turn will increase the feelings of depression, and make them even less likely to get out of bed. A vicious cycle is the result - continuing to think and act the same way will help maintain our depression.
                </p>
                <h4>
                    Congratulations, You have successfully completed Lesson 3. Continue with further lessons to know more about CBT.
                </h4>
                <br></br>
                <Link to="/cbtlessons">
                    <button className="signin_button">Back to CBT Lessons</button>
                </Link>
            </div>
        </div>

        <nav className="footer">
            From, &nbsp; Mainehealth.org. 2021. [online] Available at: &lt;https://www.mainehealth.org/-/media/MaineHealth/PDFs/Clinical-Guidelines-and-Resources/SelfHelpCourse-in-CBT.docx&gt; [Accessed 22 April 2021].
        </nav>
        </div>
    )
}

export default Lesson3_2
