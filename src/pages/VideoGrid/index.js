import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ResponsivePlayer from '../../components/Videos';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';


import './styles.scss';

class VideoGrid extends Component {

    constructor (props) {
        super (props);
        this.state = {vids:[]}
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md>
                        <p ID = 'VIDEO'>
                          Test!  <ResponsivePlayer />
                        </p>
                       
                    </Col>
                    
                    <Col md>
                        <p>
                            Test 2!
                        </p>
                    </Col>
                </Row>

            </Container>
           
                   
            
        )
        
    }

        
}

export default VideoGrid;

