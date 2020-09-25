import React from "react";
import Main from "./Main";
import App from './App';
import Footer from "./Footer";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Contact(){
    return(
        <div>
            <div class="content">
            <div class="row infoCard">
                <div class="col-sm-12">
                    <h1 class="display-4 text-center">Contact</h1>
                    <br></br>
                    <h5 class="display-5 text-center">Email Me</h5>
                    <p class="display-6 text-center">ewangso19@gmail.com</p>
                    <h5 class="display-5 text-center">Call Me</h5>
                    <p class="display-6 text-center">+1 (908) 316 1361</p>
                    <h5 class="display-5 text-center">Tweet Me</h5>
                    <p class="display-6 text-center">@ewangso19</p>
                    <h5 class="display-5 text-center">See Me On Facebook</h5>
                    <p class="display-6 text-center">Ethan Wang-So</p>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            
        </div>
        <Footer />

        </div>
        
        
    );
}

export default Contact;