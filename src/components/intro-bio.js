import React from "react"
import "../styles/intro-bio.css"
import mountainImage from "./../images/mountain.jpeg"
import goddessImage from "./../images/goddess.jpeg"
import annaImage from "./../images/anna.jpg"
import $ from 'jquery';
import SvgComponent from "../svg/svg.js"
import "../styles/full.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Draggable from 'react-draggable';
import "../styles/full.css"

import Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Intro extends React.Component {

// IN the constructor of the component
//  1. set inital state of show to false and ModalContent to empty.  This will ensure modal will not show at the start of the page
//  2. in showContent1 and showContent2 methods, you can set whatever content you like and set show to true.  This will ensure the Modal will displat the content. 
//     This type of code organization will let you show different content and keep just one modal window.  We trigger these methods from dirrerent buttons. You can have them called from a link as well.
//  3. handleHide method will make the Modal disappear.  We will call this method from 'Close' button in the Modal
//  4. <Modal> window is defined towards the end of this component
 constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      ModalContent: ''
    };

    this.showContent1 = () => {
    
      this.setState({ 
        show: true ,
        ModalContent: 'Modal content 1 ' });
    };

    this.showContent2 = () => {
    
      this.setState({ 
        show: true ,
        ModalContent: 'Modal Content 2' });
    };


    this.handleHide = () => {
      this.setState({ show: false });
    };
  }



  componentDidMount() {

    // MOUNTAIN IMAGE MOVE
    $("#parentHoverImageMountain").mousemove(function(e){
      $("#movingImage1").css({
          "left":e.pageX,
           "top": e.pageY,
           "display":"block"
        });
    });
    $("#parentHoverImageMountain").mouseleave(()=>{
        $("#movingImage1").css({
            "display":"none"
        });
    });
    
    // GODDESS IMAGE MOVE
    $("#parentHoverImageGoddess").mousemove(function(e){
      $("#movingImage2").css({
          "left":e.pageX,
           "top": e.pageY,
           "display":"block"
        });
    });
    $("#parentHoverImageGoddess").mouseleave(()=>{
        $("#movingImage2").css({
            "display":"none"
        });
    });
    
    // ANNA IMAGE MOVE
    $("#parentHoverImageAnna").mousemove(function(e){
      $("#movingImage3").css({
          "left":e.pageX,
           "top": e.pageY,
           "display":"block"
        });
    });
    $("#parentHoverImageAnna").mouseleave(()=>{
        $("#movingImage3").css({
            "display":"none"
        });
    });
    
    
    }

    render() {
      return (
      <div>
      <Container fluid className="containerAllCols">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>

            <Row> 
                <Col xs={8}>
                  <h1 className="sectionHead">Anna Purna Kambhampaty</h1>
                  
                    <span className="d-none d-md-block"> 
                      <p>No, not like the motion picture company. Like
                        <span id="parentHoverImageMountain"><span className= "inlineText"> 
                          &nbsp;the Himalayan Mountain
                          <img src={mountainImage} id="movingImage1"/>
                        </span></span>, or 
                        <span id="parentHoverImageGoddess"><span className= "inlineText"> 
                          &nbsp;the Hindu goddess of food
                          <img src={goddessImage} id="movingImage2"/>
                        </span></span>! Or
                        <span id="parentHoverImageAnna"><span className= "inlineText"> 
                          &nbsp;the person
                          <img src={annaImage} id="movingImage3"/>
                        </span></span> (me).
                      </p>
                        <p>Welcome to my web presence. I'm a writer and technologist based in New York. I'm currently a reporter at <a href="https://time.com/author/anna-purna-kambhampaty/" target="_blank" className= "inlineTextLink"> TIME Magazine</a>, writing about culture, race, and gender. I've also written for <a href="https://www.thejuggernaut.com/author/anna-purna-kambhampaty" target="_blank" className= "inlineTextLink"> The Juggernaut</a>, a publication focussed on the rise of South Asia and the South Asian diaspora. In the past, I've worked with The New York Times, The Bloomberg Innovation Team at the City of Syracuse, CNBC, and MILLY.</p>
                        <p>I'm a recent graduate of Cornell University, where I was part of 
                          <a href="https://learning.cis.cornell.edu/" target="_blank" className= "inlineTextLink"> the Future of Learning Lab</a>. Drop me a line at
                          <a href="mailto:anna.kambhampaty@time.com?Subject=Hello" target="_top" className="inlineTextLink"> annakambhampaty@gmail.com</a>. 
                        </p>
                    </span>
                  </Col>
                  <Col xs={4}>  
                    <Draggable className="orange"> 
                      <SvgComponent />
                    </Draggable> 
                  </Col>
                </Row>
      
                <Row>    
                  <Col xs={12} className="makeDisappearAtMedium">
                    <p>No, not like the motion picture company. Like<span className= "inlineText"> the Himalayan Mountain</span>, or<span className= "inlineText"> the Hindu goddess of food</span>! Or<span className= "inlineText"> the person</span> (me).</p>
                    <p>Welcome to my web presence. I'm a writer and technologist based in New York. I'm currently a reporter at <a href="https://time.com/author/anna-purna-kambhampaty/" target="_blank" className= "inlineTextLink"> TIME Magazine</a>, writing about culture, race, and gender. I've also written for <a href="https://www.thejuggernaut.com/author/anna-purna-kambhampaty" target="_blank" className= "inlineTextLink"> The Juggernaut</a>, a publication focussed on the rise of South Asia and the South Asian diaspora. In the past, I've worked with The New York Times, The Bloomberg Innovation Team at the City of Syracuse, CNBC, and MILLY.</p>
                    <p>I'm a recent graduate of Cornell University, where I was part of 
                      <a href="https://learning.cis.cornell.edu/" target="_blank" className= "inlineTextLink"> the Future of Learning Lab</a>. Drop me a line at
                      <a href="mailto:anna.kambhampaty@time.com?Subject=Hello" target="_top" className="inlineTextLink"> annakambhampaty@gmail.com</a>. 
                    </p>
                  </Col>
                </Row>
              


                
          </Container>
  
      </div>
      
          )
      }
      
      }