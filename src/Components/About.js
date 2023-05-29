import React from 'react';
import "./About.css";


const About=()=>{

    return(
        <div className="container-about">
            {/* <h1>About Developer</h1> */}
                <h4>Hi Everyone,</h4>
                <p>My name is <b>Dhananjay</b>, and I am a passionate <b>Web developer</b> with a strong background in creating innovative and immersive online experiences. 
                With a <b>B.Tech</b> degree in <b>Software Engineering</b>, I have acquired a solid foundation in various web technologies, including <b>JavaScript</b>, <b>React</b>, <b>CSS</b>, and <b>HTML</b>. These skills, combined with my dedication and attention to detail, enable me to craft websites that are not only visually appealing but also highly functional and user-friendly.
                Throughout my journey as a web developer, I have been fortunate to gain valuable experience working at <b>MNC</b>, a leading IT services company. This experience has exposed me to real-world challenges and provided me with the opportunity to collaborate with talented professionals, allowing me to refine my skills and stay updated with the latest industry trends.
                I am constantly seeking new challenges and opportunities to expand my knowledge and expertise. Whether it's building responsive web applications, optimizing website performance, or implementing intuitive user interfaces, I approach every project with a focus on delivering exceptional results.
                <b>Thank you for visiting</b>, and I invite you to explore my portfolio to get a glimpse of my work. If you have any inquiries or if there's a project you'd like to discuss, please feel free to reach out to me.
                I look forward to connecting with you and bringing your web development ideas to life.
                <br/>
                <br/>
                </p>
            <form>
            <div className="about-form-group">
                <input type="text" placeholder="Email"/>
            </div>
            <div className="about-form-group">
                <input type="text" placeholder="Password"/>
            </div>
            <div className="about-form-group">
                <button type="submit" className="btn">Login</button>
                <h4>Forgot Password?</h4>
            </div>
            
            <div className="about-form-register">
                <p>Don't have Account? <br/> Sign Up or Register below</p>
                <button type="submit" className="btn">Sign Up</button>
            </div>
            </form>
        </div>       
    )
    };    

export default About;