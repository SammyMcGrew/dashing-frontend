import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import VideoGrid from './../VideoGrid';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
// import Button from './../../../../


// import QRcodes from '../../components/QRCodes';
// import Lesson from '../../components/lesson';
// import Videos from '../../components/Videos';

const Dashboard = props => {
    return (
        <div className='dash'>
        <h1>
            Welcome to your dashboard!
            <ul>
                <li>
                    <Link to='/videogrid'>
                        Applicants Video Resumes
                    </Link>
                </li>
            </ul>
      
            <VideoGrid id='vidgrid' />
            
            
            {/* <QRcodes /> */}
            {/* <Lesson />     */}
            {/* <Videos />        */}
        </h1>
                
    </div>
    );
    
};

export default Dashboard;