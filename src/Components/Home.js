import React from 'react';
import "./Home.css";



const Home = () => {
    return(
        <div className="container">
            <h1>Gmail Login</h1>
            <form>
            <div className="form-group">
                <input type="text" placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Password"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn">Login</button>
                <h4>Forgot Password?</h4>
            </div>
            
            <div className="form-register">
                <p>Don't have Account? <br/> Sign Up or Register below</p>
                <button type="submit" className="btn">Sign Up</button>
            </div>
            </form>
        </div>       
    )
    };    

export default Home;