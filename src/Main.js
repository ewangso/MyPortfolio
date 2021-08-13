import React from "react";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Main(){
    return(
        <div>
            <div class="row infoCard col-sm-12">
                <div class="col-sm-12">
                <h1 class="display-4 text-center card-title">Introduction</h1>
                <p class="display-5 text-left indent">
                    Hello, my name is Ethan Wang-So. 
                    I am a student, programmer, and web designer. I am currently a second year student,
                    majoring in Computer Science, at the New Jersey Institute of Technology.
                    <br></br><br></br>
                </p>
                <p class="display-5 text-left indent">
                    I have had a very diverse work experience so far. My most recent experience was when 
                    I worked as a Research & Development Intern for Colgate-Palmolive, where I helped
                    develop Android apps for the research team. 
                    Before that, I was a researcher in the MIXR Lab at the New Jersey Institute of Technology. 
                    I have also worked as a teaching assistant for Undergraduate Python
                    courses, whilst taking classes. 
                    I am always looking for any internship or co-op opportunities in the field of
                    software engineering/development and computer science. I currently live in the 
                    New York/New Jersey area, but I am always willing to travel anywhere for a job. 
                </p>
                </div>
            </div>

            <div class="row infoCard">
                <div class="col-sm-6">
                    <h1 class="display-4 text-center">Education</h1>
                    <p class="display-5 text-left">
                        <div class="row">
                            <div class="col-sm-7">
                                <strong>New Jersey Institute of Technology </strong>
                            </div>
                            <div class="col-sm-5">
                                <p>GPA: 3.6</p>
                            </div>
                        </div>
                        <ul>
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Academic Excellence Scholarship Recipient</li>
                            <li>Dean's List</li>
                        </ul>
                    </p>
                </div>
                <div class="col-sm-6 sideImage">
                    <img class="descImage" src={ require('./images/njit.png') } />
                </div>
            </div>

            <div class="row infoCard">
                <div class="col-sm-6">
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
                
                <div class="col-sm-6 sideImage">
                    <img class="descImage" src={ require('./images/coding.jpeg') } />
                </div>
            </div>

            <div class="row infoCard">
                <div class="col-sm-6">
                    <h1 class="display-4 text-center card-title">Experience</h1>
                    <p class="display-6 text-left">
                        <strong>Colgate-Palmolive</strong><br></br>
                        <p class="workDesc">
                        <u>Research & Development Intern</u><br></br>
                        <i>March 2021 - August 2021</i> <br></br>
                        I developed Android applications for the research team. I also did research
                        on various ways mobile devices can be used to estimate UV exposure. 
                        </p>

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

                <div class="col-sm-6 sideImage">
                    <img class="descImage" src={ require('./images/computerdesk.jpg') } />
                </div>
            </div>
            <div class="container-sm">
                <Footer />
            </div>
            
        </div>
    );
}

export default Main;