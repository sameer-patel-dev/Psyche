import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
const Lesson1_2 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonBody">
            <div>
                <h3>Cognitive Distortions - 2</h3>
                <br></br>
                <iframe className="videoLesson" src="https://www.youtube.com/embed/Niy54VJWPFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                Addressing problem orientation: Each person in the world has a unique approach to problems. While some are more submissive in the face of a new conflict and enact avoidance measures, others can be more compulsive, using aggression to address problems without creativity or introspection. During problem solving therapy, comprehensive assessments of attitudes, thoughts and strategies for problem solving are evaluated and any weakness can be addressed through CBT activities.
<br /><br />
Clearly defining problems: People are often restricted from effective problem solving because it can be difficult to identify what the problem actually is. As an example, being stressed at work can often be blamed on anxiety, but in actuality, it might be a problem associated with assertiveness over your boundaries. If you are constantly having work delegated to you, this can significantly increase your stress levels.
<br /><br />
Brainstorming and evaluating solutions: Problem solving group therapy is designed to provide a means for you to comprehensively evaluate solutions to the things that are causing you distress in your life. When multiple solutions are presented, problem solving can become far less onerous and can help people to take more action. 
<br /><br />
Taking action: If a problem can be broken down into a list of steps, then the problem solving process can be far more achievable. Problem solving therapy for depression helps a person to reduce the overwhelming feelings associated with the problems that they are facing so that they can confidently achieve their goals. When a large task is broken down this way, slow and steady progress can be made. CBT activities are often added to increase the efficacy of these actions.
                </p>
                <h4>
                    Congratulations, You have successfully completed Lesson 2. Continue with further lessons to know more about CBT.
                </h4>
                <br></br>
                <Link to="/cbtlessons">
                    <button className="signin_button">Back to CBT Lessons</button>
                </Link>
            </div>
        </div>

        <nav className="footer">
            From, &nbsp; Cognitive Behavioral Therapy Los Angeles. 2021. Problem Solving Therapy/Treatment Los Angeles | Cognitive Behavioral Therapy. [online] Available at: &lt;https://cogbtherapy.com/problem-solving-therapy-los-angeles&gt; [Accessed 22 April 2021].
        </nav>

        </div>
    )
}

export default Lesson1_2
