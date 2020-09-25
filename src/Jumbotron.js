import React from "react";

function Jumbotron(){

    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
                <p class="display-5 text-center text-dark">Ethan Wang-So</p>
                <a href="https://twitter.com/ewangso19">
                    <img src={ require('./images/Twitter-Logo.png') } alt="HTML tutorial" class="iconLink"/>
                </a>
                <a href="https://www.facebook.com/ethan.wangso">
                    <img src={ require('./images/facebook.png') } alt="HTML tutorial" class="iconLink"/>
                </a>
                <a href="https://www.linkedin.com/in/ethan-wang-so-112590164/">
                    <img src={ require('./images/linkedin.png') } alt="HTML tutorial" class="iconLink"/>
                </a>
                <a href="https://github.com/ewangso">
                    <img src={ require('./images/github.png') } alt="HTML tutorial" class="iconLink"/>
                </a>
                
            </div>
        </div>
        
    );
}

export default Jumbotron;