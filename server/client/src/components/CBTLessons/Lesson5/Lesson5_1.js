import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
const Lesson5_1 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonBody">
            <div>
                <h3>Cognitive and Behavorial Strategies - 1</h3>
                <br></br>
                <iframe className="videoLesson" src="https://www.youtube.com/embed/fGCvKQY2g_w" title="YouTube video player" frameborder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                <p>
                Guided imagery helps you use your imagination to take you to a calm, peaceful place.

Because of the way the mind and body are connected, guided imagery can make you feel like you are experiencing something just by imagining it.
You can do guided imagery with audio recordings, an instructor, or a script (a set of written instructions) to lead you through the process.
You use all of your senses in guided imagery. For example, if you want a tropical setting, you can imagine the warm breeze on your skin, the bright blue of the water, the sound of the surf, the sweet scent of tropical flowers, and the taste of coconut so that you actually feel like you are there.
Imagining yourself in a calm, peaceful setting can help you relax and relieve stress.

                </p>
                <Link to="/cbtlessons/5_2">
                    <button className="signin_button">Next Lesson</button>
                </Link>
            </div>
        </div>

        <nav className="footer">
            From, &nbsp; Uofmhealth.org. 2021. Stress Management: Doing Guided Imagery to Relax | Michigan Medicine. [online] Available at: &lt;https://www.uofmhealth.org/health-library/uz2270&gt; [Accessed 22 April 2021].
        </nav>

        </div>
    )
}

export default Lesson5_1
