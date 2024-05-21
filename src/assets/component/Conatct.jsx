import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane , faStar  } from '@fortawesome/free-solid-svg-icons'

const Conatct = () => {
    return (
        <section className="section4" id="l-contact"> 
            <div className="contact">
                <h2>CONTACT ME</h2>
                <div className="star4">
                    <i><FontAwesomeIcon icon={faStar} /></i>
                </div>
            </div>
            <form className="form" action="#">
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Phone numbe" />
                <textarea className="message" cols="10" rows="5" placeholder="Message"></textarea>
                <button className="btn2"><i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
            </form>
        </section>
    )
}

export default Conatct