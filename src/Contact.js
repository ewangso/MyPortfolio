import React from "react";
import Main from "./Main";
import App from './App';
import Footer from "./Footer";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Contact(){
    return(

        <div>
            <div class="row infoCard">
                <div class="col-sm-12">
                    <h1 class="display-4 text-center">Contact</h1>
                    <br></br>
                    <h5 class="display-5 text-center">Email</h5>
                    <p class="display-6 text-center">ewangso19@gmail.com</p>
                    <h5 class="display-5 text-center">Twitter</h5>
                    <p class="display-6 text-center">@ewangso19</p>
                    <h5 class="display-5 text-center">Facebook</h5>
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

            <div class="container-sm">
                <Footer />
            </div>
        </div>


    );
}

export default Contact;