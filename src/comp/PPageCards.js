import React, { Component } from 'react'
import Screen from './imgs/screen.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ErPic from './imgs/visitER.PNG'
import Col from 'react-bootstrap/Col'
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from "react-bootstrap/CardDeck"
import CardGroup from "react-bootstrap/CardGroup"
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'


export class PPageCards extends Component {

    render() {
        //Bad to have inline style fix later
        const divStyle = {
            backgroundColor: "#393534",
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "0",
            position: "relative",
        };

        return (
            <div style={divStyle} >
                <h1 style={{ color:"#FFFAF0", padding:25 }} >Projects</h1>
                <Accordion defaultActiveKey="0 " style={{ margin: 30}}>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Hackathon Projects
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            
                <ListGroup style={{ margin: 30}}>
                    <ListGroup.Item>  
                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                         <br />
                         
                         </ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
  
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            School Projects
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                     <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Personal Projects
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>


                <ListGroup style={{ margin: 30}}>
                    <ListGroup.Item>adsasd</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>

                <CardDeck style={{ margin: 30}}>
                    <Card>
                        <Card.Img variant="top" src={ErPic} />
                        <Card.Body>
                            <Card.Title>Sample project</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>React</ListGroupItem>
                            <ListGroupItem>Heroku</ListGroupItem>
                            <ListGroupItem>JSX</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                     
                    
                    </Card>
                    </CardDeck>
                
            </div>

        )
    }
}

export default PPageCards 
