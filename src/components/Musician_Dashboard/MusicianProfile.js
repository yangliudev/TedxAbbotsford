import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Axios from "axios";
import "./MusicianDashboard.css";

function MusicianProfile() {
    return (
        <ReactBootStrap.Container>
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col>
                    <h2>Profile</h2>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
            
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Name: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>A musician </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Address: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>An address </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Phone: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>A phone number </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Email: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>An email </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">IBAN: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>An IBAN </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Email: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>An email </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Training: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>Master </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Instrument: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>Voice </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Style: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>Classical </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Solo or Duo?: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>Solo </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Website: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>N/A </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col md="auto">
                    <p className="profileHeader">Media: </p>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md="auto">
                    <p>N/A </p>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </ReactBootStrap.Container>
    )
};

export default MusicianProfile