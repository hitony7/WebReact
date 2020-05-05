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
import Media from 'react-bootstrap/Media'


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
                            
                        <ul className="list-unstyled" >
                                <Media as="li"style={{ margin: 30}}>
                                    <img
                                    width={640}	
                                    height={360}
                                    className="mr-3"
                                    src={ErPic}
                                    alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                    <h4>YouTube Playlist Course Compiler</h4>
                                    <h5>Calgaryhacks 2020</h5>
                                    
                                    <p>
                                    We decided to improve the University experience. 
                                    Our project grabs the public university calendar and parse the keywords to identify what is important in the course,
                                    then it use the youtube api get the relevent search requests then it's sends to a website as a collection of playlists for each topic.

                                    </p>
                                    <ul>
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                     </ul>
                                    </Media.Body>
                                </Media>

                                <Media as="li" style={{ margin: 30}}>
                                    <img
                                    width={640}	
                                    height={360}
                                    className="mr-3"
                                    src={ErPic}
                                    alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                    <Card>
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
                                            <Card.Subtitle>Our Process</Card.Subtitle>
                                            <br/>
                                            <Card.Text>
                                            First we had to figure out how to get the courses, we know that each university has a class calendar that shows all course that
                                            are available in the current term. we used beautifulsoup(python) to collect the classes then parse the description. We need to get rid 
                                            conjunctions and punctuation in the description. 
                                            Meanwhile we had on person work on the frontend using HTML, CSS, JQuery. 
                                            Afterwords we used the keywords to call the Youtube api to return the proper videos then we stored the video links, votes and class name in a Database.
                                            We had a voting system to allow the user to rank the usefulness of a video to determine it's placement, also if it reaches a certain negative vote threshold it will not show.

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
                                            <Card.Link href="https://devpost.com/software/youtube-playlist-course-compiler-pbeosh">Calgaryhacks Project Link</Card.Link>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    </Media.Body>
                                </Media>

                                <Media as="li" style={{ margin: 30}}>
                                   <img
                                    width={640}	
                                    height={360}
                                    className="mr-3"
                                    src={ErPic}
                                    alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>YouTube Playlist Course Compiler</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Calgaryhacks 2020</Card.Subtitle>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Cras justo odio</ListGroupItem>
                                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="#">Github Link</Card.Link>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    </Media.Body>
                                </Media>
                                </ul>
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
