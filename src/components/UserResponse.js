import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserResponse() {
    return (
        <div>
            <h2 className="userIntro">Select an instructor to train with</h2>
            <div className="row">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/Cardio.jpg" alt="Image" />
                    <Card.Body>
                        <Card.Title>Cardio</Card.Title>
                        <Card.Text>
                            Speciality: Cardio
                            Muscle Group: 
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/Weightlifting.jpg" />
                    <Card.Body>
                        <Card.Title>Olympic_weightlifting</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/Strength.jpg" />
                    <Card.Body>
                        <Card.Title>Strength</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>



                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/Stretching.jpg" />
                    <Card.Body>
                        <Card.Title>Stretching</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="row">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/Pylometrics.jpg" />
                    <Card.Body>
                        <Card.Title>Plyometrics</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>
           

            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/PowerLifting.jpg" />
                    <Card.Body>
                        <Card.Title>Powerlifting</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/Pylometrics.jpg" />
                    <Card.Body>
                        <Card.Title>Plyometrics</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Images/Pylometrics.jpg" />
                    <Card.Body>
                        <Card.Title>Plyometrics</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Find Instructor</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default UserResponse;
