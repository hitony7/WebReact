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
            <div style={ divStyle } >
                 <h1>Featured projects</h1>
        <Container fluid >
            <Row className="justify-content-md-center">
            <Col >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {ErPic} />
                    <Card.Body>
                        <Card.Title>Youtube Course Complier</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
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
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {ErPic} />
                    <Card.Body>
                        <Card.Title>Youtube Course Complier</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
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
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {ErPic} />
                    <Card.Body>
                        <Card.Title>Youtube Course Complier</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
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
                    </Card>
                
                </Col>
                </Row>
                <Row>
                <Button variant="primary" size="lg" block>
                     Click Here to see the full collection.
                </Button>
                </Row>
                </Container>
            </div>
            
        )
    }
}

export default IntroPage
