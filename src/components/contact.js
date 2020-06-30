import React from "react"
import "../styles/contact.css"
import SVGslice from "../svg/svgSlice.js"

import $ from 'jquery';
import "../styles/full.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Draggable from 'react-draggable';

export default class Intro extends React.Component {

render() {
    return (
    <Row className="mainRow">
           
    <Col>
        <div id="contactSection">
            <h1 className="contactSectionHead">Contact</h1><br />
            <a href="mailto:annakambhampaty@gmail.com?Subject=Hello" target="_top" className="contactLink">Email</a><br />
            <a className="contactLink" href="https://www.linkedin.com/in/annakambhampaty/" target="_blank" >LinkedIn</a><br />
            <a className="contactLink" href="https://twitter.com/anna_P_k" target="_blank" >Twitter</a><br />
            <a className="contactLink" href="https://www.instagram.com/kindofanna/" target="_blank" >Instagram</a><br />
            <a className="contactLink" href="https://www.instagram.com/junkfoodstudios/" target="_blank" >junkfood</a><br /><br />
        </div>     
    </Col>  

     <Col >
       <Draggable><SVGslice className="svg"/></Draggable> 
    </Col>   
        
    </Row>    
        
    )
}
}