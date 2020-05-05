import React, { Component } from 'react'
import Screen from './imgs/screen.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from "react-bootstrap/CardDeck"
import CardGroup from "react-bootstrap/CardGroup"
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
// pics
import ErPic from './imgs/visitER.PNG'
import YouTube from './imgs/youtube.PNG'
import Papers from './imgs/demo.gif'
import API from './imgs/postman.PNG'
import AutoSort from './imgs/autosort.jpg'

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
                                    src={AutoSort}
                                    alt="Garbage bins"
                                    />
                                    <Media.Body>
                                    <Card>
                                    <Card.Body>
                                            <Card.Title>Auto Garbage Sorter</Card.Title>
                                            <Card.Subtitle>Theme: Climate and Environment</Card.Subtitle>
                                            <br/>
                                            <Card.Subtitle className="mb-2 text-muted">Code the Change Hackathon 2019</Card.Subtitle>
                                            <Card.Text>
                                            This project correctly classify the type of garbage from a picture taken from a smartphone. This ensures people don't put their garbage in the wrong bin ;). 
                                            We developed this application in for the Code the Change Hackathon 2019 sponsored by Benevity and won the People's Choice award.

                                            </Card.Text>    
                                            <br/>
                                            <Card.Subtitle>Our Process</Card.Subtitle>
                                            <br/>
                                            <Card.Text>
                                                asdasdafsadfasf
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Machine Learning, Keras, Google Colab</ListGroupItem>
                                            <ListGroupItem>React Native, Flask, Python</ListGroupItem>
                                            <ListGroupItem>AWS EC2, Docker</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="https://github.com/JamesPeralta/Auto-Garbage-Sorter">Github Link</Card.Link>
                                            <Card.Link href="https://www.facebook.com/pg/CodeTheChangeYYC/photos/?tab=album&album_id=157540012299274&__xts__%5B0%5D=68.ARDMqOYU9zy1otIeytMd-qsmGoOZlBBCy3CBDBhG-5WE2tjTqX-aHdeljjL0GKblWb6jZSAiSEK9Z8cOACqutzPrFWgrfN515MU1HgdJPwY_4Obib6p4oL5PnOCw0CmBrcKbxWEOlHumkihM7jr-4o0EEdxuOrBo5QUwkZXn_CogmqNny7ifdtF3zdPSqAfGp8FoI_quGnTtfxU6sklVg4A3P1wTpkydq8IdhqfKqV6idb6J5Ndaxb9v-QSg9-_hx5e-0HaScwV6JNmZLAlXbvqZ1IU9aYyjD7u6zbka0XUGhsz2vi83OmGtGqwugqKB8QAl0yu3xk2RN7cdxtVZ-40EQUFrGUc6NRnLGEXK0d3KbPXZnMGhU7ToVIoTG3oKq3tsJirZeXg06rp1ZlvmYy0H3f8rraP8S25UYzfftXWLvz4WwX70lM8Tv3lKaDQBxxi0UmatWEUSbXDatuz9kn--PwpVJ3Oh43UL2_-xrl725kz1Cq4m1U2iiIR5lKgSaDfgAlMgc5nw4CX74lRYuVqAivEzT_TcBQ&__tn__=-UC-R&ref=page_internal">Facebook Code to Change Link</Card.Link>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Nov 2020</small>
                                        </Card.Footer>
                                        </Card>
                                    </Media.Body>
                                </Media>

                                <Media as="li" style={{ margin: 30}}>
                                    <img
                                    width={640}	
                                    height={360}
                                    className="mr-3"
                                    src={YouTube}
                                    alt="Youtube Pics"
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
                                    alt="visit er homepage"
                                    />
                                    <Media.Body>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>VisitER</Card.Title>
                                            <Card.Subtitle>Theme: Child health and wellness</Card.Subtitle>
                                            <br/>
                                            <Card.Subtitle className="mb-2 text-muted">Innovation 4 Health 2019 Health Hack </Card.Subtitle>
                                            <Card.Text>
                                            VisitER is an online emergency-room (ER) check-in system. It is specifically developed for parents and caregivers of autistic children, so that when a child needs to visit the ER, their caregiver can initiate the triage process from the comfort of their own home. This is preferable to waiting for hours in the ER, where the chaotic environment may be overstimulating for the child. Once patient and case details have been submitted, the triage staff will assign a wait time, which is then returned to the caregiver, informing them of when they should arrive at the hospital in order to see a physician with minimal waiting.
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
                                            <ListGroupItem>React + Rails</ListGroupItem>
                                            <ListGroupItem>Postgresql</ListGroupItem>
                                            <ListGroupItem>Heroku</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="https://github.com/hitony7/WaitTimes">Github Link</Card.Link>
                                            <Card.Link href="https://www.innovation4health.com/2019-hhc">2019 Health Hack Competition Link</Card.Link>
                
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Oct 2019 - Nov 2019</small>
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
                        <ul className="list-unstyled" >
                                <Media as="li" style={{ margin: 30}}>
                                    <img
                                    width={640}	
                                    height={360}
                                    className="mr-3"
                                    src={Papers}
                                    alt="SENG LOGIN"
                                    />
                                    <Media.Body>
                                    <Card>
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
                                 <small className="text-muted">Jan 2020 - April 2020</small>
                            </Card.Footer>
                        
                                    </Card>
                                    </Media.Body>
                                </Media>

                                <Media as="li" style={{ margin: 30}}>
                                   <img
                                    width={640}	
                                    height={360}
                                    className="mr-3"
                                    src={API}
                                    alt="postman pic"
                                    />
                                    <Media.Body>
                                    <Card>
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
                                 <small className="text-muted">Jan 2020 - April 2020</small>
                            </Card.Footer>
                    </Card>
                                    </Media.Body>
                                </Media>
                                </ul>
                            
                        </Accordion.Collapse>
                    </Card>
                     <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Personal Projects
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body, work in progress</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
            </div>

        )
    }
}

export default PPageCards 
