import React, { Component } from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Link} from 'react-router-dom';
import File from './Resume.pdf';
class Resume extends Component {
    constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

        this.state = {
        numPages: null,
        pageNumber: 1
        }
    }

    onDocumentLoad = ( {numPages}) => {
        this.setState({numPages});
    }

    render() {
        return(
            <div class="content">
                <a href={File} target='_blank'>
                    <p>View My Resume</p>
                </a>
            </div>
        );
        

        
    }
}

export default Resume;