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

export class IntroPage extends Component {

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
                <h1 style={{ color:"#FFFAF0", padding:25 }} >Featured Projects</h1>
                <CardGroup style={{ margin: 30}}>
                    <Card>
                        <Card.Img variant="top" src={ErPic} />
                        <Card.Body>
                            <Card.Title>YouTube Playlist Course Compiler</Card.Title>
                            <Card.Subtitle>Theme: University experience</Card.Subtitle>
                             <br/>
                             <Card.Subtitle className="mb-2 text-muted">Calgaryhacks 2020</Card.Subtitle>
                            <Card.Text>
                            This project was made for UofC Calgaryhacks 2020 hosted by Computer science undergraduate society.
                             We decide to create a website that goes through the class calendar to find all course at the university.
                            Then it will create a youtube playlist from the keywords of the class calendar description, users will be able to rank the videos
                            if they are relevant to the class they are taking.
                            </Card.Text>    
                            <br/>
                            </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>YouTube API</ListGroupItem>
                                    <ListGroupItem>HTML, CSS, JQuery and Python</ListGroupItem>
                                    <ListGroupItem>Database: Firestore</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="https://github.com/justinf34/Hackathon2020">Github Link</Card.Link>
                                    <Card.Link href="https://calgaryhacks-2020.devpost.com/">Calgaryhacks 2020 Link</Card.Link>
                                    <Card.Link href="https://devpost.com/software/youtube-playlist-course-compiler-pbeosh">CH Project Link</Card.Link>
                                </Card.Body>
                            <Card.Footer>
                                 <small className="text-muted">Jan 2020</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                        <Card.Img variant="top" src={ErPic} />
                        <Card.Body>
                            <Card.Title>Academic Paper Journal System</Card.Title>
                            <Card.Subtitle>Intro to Software Engineering </Card.Subtitle>
                             <br/>
                            <Card.Text>
                            This a system that allows user of many types user to interact with journals logging system. 
                            This was for our software engineering course which focus on how to develop software with proper methodology/practices and agile development, which we used SCRUM.
                            </Card.Text>    
                            <br/>
                            </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>YouTube API</ListGroupItem>
                                    <ListGroupItem>HTML, CSS, JQuery and Python</ListGroupItem>
                                    <ListGroupItem>Database: Firestore</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="https://github.com/justinf34/Hackathon2020">Github Link</Card.Link>
                                    <Card.Link href="https://calgaryhacks-2020.devpost.com/">Calgaryhacks 2020 Link</Card.Link>
                                    <Card.Link href="https://devpost.com/software/youtube-playlist-course-compiler-pbeosh">CH Project Link</Card.Link>
                                </Card.Body>
                            <Card.Footer>
                                 <small className="text-muted">Jan 2020</small>
                            </Card.Footer>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ErPic} />
                        <Card.Body>
                            <Card.Title>>Sample project</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <Button variant="primary" size="lg" block>
                    Click Here to see the full collection.
                </Button>
            </div>

        )
    }
}

export default IntroPage
