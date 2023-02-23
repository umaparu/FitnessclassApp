import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Instructors.css";


function Instructors(props) {
    return (
        <div>
            <div className="row">
                <Card key='Dark'  bg='dark' text='light' className="mb-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="card-img-top" src={props.image} alt="Image" />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            <p><strong>Speciality: </strong>{props.speciality}</p>
                            <p><strong>Muscle: </strong>{props.muscles} </p>
                        </Card.Text>
                        <Button variant="primary">Contact {props.name} </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Instructors;