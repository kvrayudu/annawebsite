import React from "react"
import Intro from "../components/intro-bio"
import Digital from "../components/digital"
import Writing from "../components/writing"
import Contact from "../components/contact"

import Scrollspy from 'react-scrollspy'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/nav.css';
import SvgDrop from "../svg/svgDrop.js"
import $ from 'jquery';
import ReactDOM from "react-dom";
import "../styles/index.css"


export default () => (
   
    
        <div className="App">
        <Row> 

        <Col md={3} className="d-none d-md-block">
            <Scrollspy className="scrollspy" items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } currentClassName="isCurrent">
                <li><a href="#section-1"  className="navItem"><SvgDrop className ="svgDrop"/>Introduction</a></li>
                <li><a href="#section-2"  className="navItem"><SvgDrop className ="svgDrop"/>Writing</a></li>
                <li><a href="#section-3"  className="navItem"><SvgDrop className ="svgDrop"/>Digital</a></li>
                <li><a href="#section-4"  className="navItem"><SvgDrop className ="svgDrop"/>Contact</a></li>

            </Scrollspy>
        </Col>

            <Col xs={12} md={9}>
          <div>
            <section id="section-1">
              <Intro className="intro"/> 
            </section>

            <section id="section-2">
                <Writing />
            </section>

            <section id="section-3">
              <Digital /> 
            </section>

            <section id="section-4">
              <Contact/>
            </section>
  
          </div>
          </Col>

          
</Row>
<Row className="footer">
  <Col >
    <br/><br/> © 2020 Anna Kambhampaty<br/>
    Typeface - <a  href="https://www.redaction.us/" target="_blank" className="typefaceLink"> "Redaction"</a>

  </Col>
</Row>

        </div> 
      );
  
