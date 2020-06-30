import React from "react"
import "../styles/digital.css"
import pocketDemImage from "./../images/pocketdemocracy.png"
import nytImage from "./../images/nyt.jpeg"
import bloombergImage from "./../images/bloomberg.png"
import tattooImage from "./../images/tattoo.jpg"
import museumImage from "./../images/museum.jpeg"

import Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import $ from 'jquery';
import "../styles/full.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Intro extends React.Component {

    constructor(props, context) {
        super(props, context);
    
        this.state = {
          show: false,
          ModalContent: ''
        };
    
        this.showContent1 = () => {
        
          this.setState({ 
            show: true ,
            ModalHeader:'MadTatter: A Temporary Tattoo Machine',
            ImgContent: tattooImage,
            ModalContent: 'Using 3D printing and design techniques, laser-cutting, G-code, and the Particle IoT platform, I worked with two other students at the Rapid Prototyping Lab at Cornell to create this protoype of a temporary tattoo printer. The process included multiple design and testing iterations, including hand sketches and a cardboard model. Our final functional prototype is pictured above. Please reach out if you would like to read a full report or view a demo.' });
        };
    
        this.showContent2 = () => {
        
          this.setState({ 
            show: true ,
            ModalHeader:'AR Museum Scavenger Hunt',
            ImgContent: museumImage,
            ModalContent: 'In partnership with the Johnson Museum of Art at Cornell University, I worked with Blippar, an augmented reality building tool, to create an interactive museum experience. A visitor could download the Blippar app on their smartphones and then scan over various works in the Asian art collections to get more information in text, audio, and visual form as well as links to other relevant works or sources. I worked with students in the art history department to curate the content, and the end result turned what was previously a static viewing experience into an engaging and multimedia one.'});
        };
    
    
        this.handleHide = () => {
          this.setState({ show: false });
        };
      }

componentDidMount() {
// POCKET DEMOCRACY MOVE IMAGE
$("#pocketDem").mousemove(function(e){
  $("#pocketDemMovingImg").css({
        "left":e.pageX-300,
        "top": e.pageY+10,
       "display":"block"
    });
});
$("#pocketDem").mouseleave(()=>{
    $("#pocketDemMovingImg").css({
        "display":"none"
    });
});

// NYT MOVE IMAGE
$("#nyt").mousemove(function(e){
    $("#nytMovingImg").css({
        "left":e.pageX-300,
         "top": e.pageY+10,
         "display":"block"
      });
  });
  $("#nyt").mouseleave(()=>{
      $("#nytMovingImg").css({
          "display":"none"
      });
  });
  
// BLOOMBERG MOVE IMAGE
$("#bloomberg").mousemove(function(e){
    $("#bloombergMovingImg").css({
        "left":e.pageX-300,
         "top": e.pageY+10,
         "display":"block"
      });
  });
  $("#bloomberg").mouseleave(()=>{
      $("#bloombergMovingImg").css({
          "display":"none"
      });
  });

// TATTOO MOVE IMAGE
$("#tattoo").mousemove(function(e){
    $("#tattooMovingImg").css({
        "left":e.pageX-300,
         "top": e.pageY+10,
         "display":"block"
      });
  });
  $("#tattoo").mouseleave(()=>{
      $("#tattooMovingImg").css({
          "display":"none"
      });
  });

// MUSEUM MOVE IMAGE
$("#museum").mousemove(function(e){
    $("#museumMovingImg").css({
        "left":e.pageX-300,
         "top": e.pageY+10,
         "display":"block"
      });
  });
  $("#museum").mouseleave(()=>{
      $("#museumMovingImg").css({
          "display":"none"
      });
  });
  

}




render() {
return (

    <div id="digitalSection">
        <h1 className="digitalSectionHead">Digital</h1><br />
          
        <div  id ="pocketDem">
            <div>
            <a className="projectLink" href="https://medium.com/@annakambhampaty/pocket-democracy-empowering-voters-using-the-google-cloud-vision-api-ibm-watson-and-revspeech-61268791fcd3" target="_blank" >Pocket Democracy: A Voting Innovation App</a><br />
            <img src={pocketDemImage} id="pocketDemMovingImg"/>
            </div>
        </div>


        <div id ="nyt">
            <div>
            <a className="projectLink" href="https://uxdesign.cc/new-york-times-maker-week-2018-whos-reading-557f96898923?gi=d67a1390d557" target="_blank" >Who's Reading?: A Social News Experience | New York Times Maker Week</a><br />
            <img src={nytImage} id="nytMovingImg"/>
            </div>
        </div>

        <div id ="bloomberg">
            <div>
            <a className="projectLink" href="https://medium.com/@annakambhampaty/city-of-syracuse-housing-code-violations-21ba1cbdee98" target="_blank" >Rental Code Violations in Syracuse: UX Research | Bloomberg Innovation Team</a><br />
            <img src={bloombergImage} id="bloombergMovingImg"/>
            </div>
        </div>

        <div id ="tattoo">
            <span onClick={this.showContent1} className="projectLink">MadTatter: A Temporary Tattoo Machine</span>
            <img src={tattooImage} id="tattooMovingImg"/>
        </div>

        <div id ="museum">
            <span onClick={this.showContent2} className="projectLink">Augmented Reality Museum Scavenger Hunt</span>
            <img src={museumImage} id="museumMovingImg"/>
        </div>





      <Modal
          show={this.state.show}
          onHide={this.handleHide}
          className="modalStyling"
        >

        <Modal.Header closeButton>
          <Modal.Title>{this.state.ModalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={this.state.ImgContent} className="modalImg"/><br /><br />
            <p>{this.state.ModalContent}</p>
        </Modal.Body>
    
      </Modal>

    </div>

// dialogClassName="modal-90w"
// aria-labelledby="example-custom-modal-styling-title"
   
)
}
}