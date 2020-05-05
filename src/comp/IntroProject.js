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
                            </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>SCRUM</ListGroupItem>
                                    <ListGroupItem>Java, Vaadin</ListGroupItem>
                                    <ListGroupItem>JSON</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="https://github.com/hitony7/SENG300-Project">Github Link</Card.Link>
                                </Card.Body>
                            <Card.Footer>
                                 <small className="text-muted">April 2020</small>
                            </Card.Footer>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ErPic} />
                        <Card.Body>
                            <Card.Title>Database API For Stadium Management</Card.Title>
                            <Card.Subtitle>Databases </Card.Subtitle>
                             <br/>
                            <Card.Text>
                            The database we built is to address the issue in the management of data in stadiums, ticket sales, maintenance of facilities, etc. 
                            We created an API that integrates the ticket sale system, item management system, team management system, and other stadium related systems and made it simpler for end users to access related data.
                            We used Postman to professional document it. 
                            </Card.Text>    
                            </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Database, API</ListGroupItem>
                                    <ListGroupItem>SQL and Node.js with express</ListGroupItem>
                                    <ListGroupItem>MSSQL with Microsoft sql server management studio</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="https://github.com/hitony7/CPSC471_API">Github Link</Card.Link>
                                </Card.Body>
                            <Card.Footer>
                                 <small className="text-muted">April 2020</small>
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
