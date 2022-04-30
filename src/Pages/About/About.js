import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-area">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                    <div className="about-picture-area">
                    <img src="https://i.ibb.co/JCGfGxG/DSC-8930.jpg" alt="" />
                </div>
                
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="about-text-area">
                    <div className="personal-details text-center mt-5">
                        <h2>Md.Badruzzaman Pritom</h2>
                        <h4>React Fontend Developer</h4>
                        <p>Email: badruzzamanpritom@gmail.com</p>
                        <p>Phone: 01767026831</p>
                        <hr />
                    </div>
                    <div className="goal-text">
                        <h4>My Future Goal</h4>
                        <p>Hello, My name is Pritom. I am Graduate CSE at Kurigram Polytechnic Institute in this Year. now i'm a student of Programming Hero Online Course. In few month i have learn HTML,CSS,Javascript,Bootstrap,Tailwind css,REACT then Javascript Problem solving, at last Firebase authentication. now focus on BackEnd. which is learn NODE JS,Express js and MongoDB. </p>
                        <p>My Goal and Dream that i will be a Full stack web developer. In that path, very much focus in this course. Next i will create more project to strong my CV and GitHub.</p>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;