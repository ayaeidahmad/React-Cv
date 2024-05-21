import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook , faTwitter , faLinkedin , faDribbble } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        
        <footer className="footer">
        <div className="part1">
            <div className="location">
                <p className="p1">LOCATION</p>
                <p className="p2">2215 John Daniel Drive Clark,MO 65243</p>
            </div>
            <div className="media">
                <p className="p1">AROUND THE WEB</p>
                <div className="link">
                    
                    <a href="https://www.facebook.com/profile.php?id=100041797670889&mibextid=ZbWKwL" target="_blank">
                        <i className='facebook'><FontAwesomeIcon icon={faFacebook} /></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                    <i className='twitter'><FontAwesomeIcon icon={faTwitter} /></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aya-ahmad-a96a68239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                    <i className='linkedin'><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>
                    <a href="https://www.drobbble.com" target="_blank">
                    <i className='dribbble'><FontAwesomeIcon icon={faDribbble} /></i>
                    </a>
                </div>
            </div>
            <div className="about-free">
                <p className="p1">ABOUT FERRLANCER</p>
                <div className="about-p2">
                    <p className="p2">Freelancer is a free to use,MIT licensed Bootstrap theme created by
                        <a href="https://getbootstrap.com/" target="_blank">Start Bootstrap</a>.
                    </p>
                </div>
            </div>
        </div>
        <div className="part2">
            <p className="p1">Copyright 
            <i><FontAwesomeIcon icon={faCopyright} className='copyright'/></i>
                Your Website 2023
            </p>
        </div>
    </footer>
    )
}

export default Footer