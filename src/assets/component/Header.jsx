import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar  } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="first-page">
            <div className="page1">
                <div className="circle"></div>
                <img className="my-img" src="/public/aya-removebg-preview3.png" alt="my-image" />
                <h1 className="title">AYA EID AHMAD</h1>
                <div className="star">
                    <i><FontAwesomeIcon icon={faStar} /></i>
                </div>
                <p className="p">Front End Developer - Software Engennering</p>
            </div>
        </div>

    )
}

export default Header