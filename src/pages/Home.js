import React from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


function Home() {
    return (
        <div className="home">
            {/* <div className="home__left"> */}
                <img src="home-image.jpg"  alt="" class='img-fluid' className="home__leftImg"/>
            {/* </div> */}
            <div className="home__right">
                <div className="home__rightContainer1">
                   <img src="logo.png" height="67" className="home__rightLogo"></img> 
                </div>
                <div>
                    <Button variant="light" className="home__rightBtn rounded-lg">Explore</Button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Home
