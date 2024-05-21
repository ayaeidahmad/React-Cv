import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar  } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    return (
        <section className="section2" id="l-portfolio">
            <div className="portfolio">
                <h2>PROTFOLIO</h2>
                <div className="star2">
                    <i><FontAwesomeIcon icon={faStar} /></i>
                </div>
            </div>
            <div className="images">
                <div className="images1">
                    <div className="img1">
                        <img src="/public/html5-3384014_640.png" alt="html" />
                        <div className="content">
                            <h3>HTML</h3>
                            
                        </div>
                    </div>
                    <div className="img2">
                        <img src="/public/istockphoto-1413514596-1024x1024.jpg" alt="css" />
                        <div className="content">
                            <h3>CSS</h3>
                            
                        </div>
                    </div>
                    <div className="img3">
                    <img src="/public/javascript-736400_640.png" alt="javascript" />
                    <div className="content">
                        <h3>JavaScript</h3>
                        
                    </div>
                    </div>
                </div>
                <div className="images2">
                    <div className="img4">
                        <img src="/public/download2.png" alt="react" />
                        <div className="content">
                            <h3>React</h3>
                            
                        </div>
                    </div>
                    <div className="img5">
                        <img src="/public/boot.png" />
                        <div className="content">
                            <h3>Bootstrap</h3>
                            
                        </div>
                    </div>
                    <div className="img6">
                        <img src="/public/GitHub_Invertocat_Logo.svg.png" alt="githup" />
                        <div className="content">
                            <h3>GitHub</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio