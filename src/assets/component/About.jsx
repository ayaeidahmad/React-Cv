import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faDownload} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section className="section3" id="l-about">
        <div className="about">
            <h2>ABOUT</h2>
            <div className="star3">
                <i><FontAwesomeIcon icon={faStar} /></i>
            </div>
        </div>
        <div className="about-me">
            <div className="about-me2">
                <p>Freelancer is a free bootstrap theme created by Start Bootstrap.
                    The download includes the complete source files including HTML, CSS,
                    and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
                <p>You can create your own custom avatar for the masthead,
                    change the icon in the dividers, and add your email address
                    to the contact form to make it fully functional!
                </p>
            </div>
            <button className="btn1"><i ><FontAwesomeIcon icon={faDownload} /></i> Free Download!</button>
        </div>
    </section>
    )
}

export default About