import React from "react";

function Jumbotron(){

    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="col-sm-12 text-center">
                    <p class="display-5 text-center text-dark">Ethan Wang-So</p>
                </div>
                <div class="social">
                    <a href="https://twitter.com/ewangso19" target="_blank">
                        <img src={ require('./images/Twitter-Logo.png') } alt="HTML tutorial" class="iconLink"/>
                    </a>
                    <a href="https://www.facebook.com/ethan.wangso" target="_blank">
                        <img src={ require('./images/facebook.png') } alt="HTML tutorial" class="iconLink"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ethan-wang-so-112590164/" target="_blank">
                        <img src={ require('./images/linkedin.png') } alt="HTML tutorial" class="iconLink"/>
                    </a>
                    <a href="https://github.com/ewangso" target="_blank">
                        <img src={ require('./images/github.png') } alt="HTML tutorial" class="iconLink"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;