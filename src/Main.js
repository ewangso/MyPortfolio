import React from "react";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Main(){
    return(
        <div class="content">
            <div class="row infoCard">
                <div class="col-md-12">
                <h1 class="display-4 text-center">Introduction</h1>
                <p class="display-5 text-left indent">
                    Hello, my name is Ethan Wang-So. 
                    I am a student, programmer, and web designer. I am currently a second year student,
                    majoring in Computer Science, at the New Jersey Institute of Technology.
                    I have had a strong interest in software and coding since I was in high school.
                    I took part in a school programming competition, where my team and I worked on an eye-tracking
                    browser extension. <br></br><br></br>
                    Currently, I work as a classroom assistant for the Computer Science Department at
                    the New Jersey Institute of Technology. I am also involved with research in the MIXR Lab,
                    which is a Virtual Reality facility on campus. 
                    In addition, I take part in clubs and organizations such as the 
                    Association for Computing Machinery 
                    and Filipinos In Newark Engaging In Socio-Cultural Traditions.<br></br>


                </p>
                <p class="display-5 text-left indent">
                    I am looking for any internship or co-op opportunities in the field of
                    software engineering/development and computer science. I currently live in the 
                    New York/New Jersey 
                    area, but I am always willing to travel for a job. 
                    <br></br><br></br>
                    If you would like to see my projects, click on the projects tab in the navigation bar.
                    If you want to learn more about me, you may read more below.
                </p>
                </div>
            </div>

            <div class="row infoCard">
                <div class="col-md-6">
                <h1 class="display-4 text-center">Education</h1>
                <p class="display-5 text-left">
                    <div class="row">
                        <div class="col-lg-7">
                            <strong>New Jersey Institute of Technology </strong>
                        </div>
                        <div class="col-lg-5">
                            <p>GPA: 3.5</p>
                        </div>
                    </div>
                    <ul>
                        <li>Bachelor of Science in Computer Science</li>
                        <li>Academic Excellence Scholarship Recipient</li>
                        <li>Dean's List</li>
                    </ul>
                </p>
                </div>
                <div class="col-md-6 sideImage">
                    <img class="descImage" src={ require('./images/njit.png') } />
                </div>
            </div>

            <div class="row infoCard">
                <div class="col-md-6">
                <h1 class="display-4 text-center">Skills</h1>
                <p class="display-5 text-left">
                    <ul>
                        <li>
                            <strong>Programming</strong><br></br>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>C#</li>
                                <li>C++</li>
                                
                            </ul>
                        </li>
                        <li>
                            <strong>Web Development</strong><br></br>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Bootstrap</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Frameworks</strong><br></br>
                            <ul>
                                <li>Django</li>
                                <li>React JS</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Languages</strong><br></br>
                            <ul>
                                <li>English</li>
                                <li>Mandarin Chinese</li>
                                <li>Spanish</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                </div>
                
                <div class="col-md-6 sideImage">
                    <img class="descImage" src={ require('./images/coding.jpeg') } />
                </div>
                
            </div>

            <div class="row infoCard">
                <div class="col-md-6">
                    <h1 class="display-4 text-center">Experience</h1>
                    <p class="display-6 text-left">
                        <strong>New Jersey Institute of Technology</strong><br></br>
                        <p class="workDesc">
                        <u>Classroom Assistant</u><br></br>
                        <i>September 2020 - December 2020</i> <br></br>
                        I serve as in assistant to computer science instructors. 
                        By helping to grade assignments and exams, manage attendance,
                        and help with other necessary tasks, I make the instructor's job
                        easier. I also serve as an extra medium of communication between
                        students and instructors. I mainly help teach Python courses.
                        </p>

                        <strong>Delaware North</strong><br></br>
                        <p class="workDesc">
                        <u>Sales Associate</u><br></br>
                        <i>February 2019 - August 2019 </i><br></br>
                        Completed transactions for customers at Delaware North associated facilities. 
                        </p>

                        <strong>Aspire Taxi Medallion Fund</strong><br></br>
                        <p class="workDesc">
                        <u>Data Entry Clerk</u><br></br>
                        <i>June 2019 - August 2019 </i><br></br>
                        Managed the files and records for borrowers of taxi medallion loans. Assisted in
                        the digitization of loan records, and handled company data. 
                        </p>

                        <strong>Merryheart Health Care Center</strong><br></br>
                        <p class="workDesc">
                        <u>Volunteer Caretaker</u><br></br>
                        <i>July 2017 - August 2017 </i><br></br>
                        Provided care and entertainment for retirement home senior citizens 
                        </p>

                    </p>


                </div>
                <div class="col-md-6 sideImage">
                    <img class="descImage" src={ require('./images/computerdesk.jpg') } />
                </div>


            </div>
            <Footer />

        </div>

    );
}

export default Main;