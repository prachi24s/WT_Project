import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';


function BasicExample() {
  return (
      <div>
      <div>
    <Container>
      <Row>
      <Col>
      <Card>
      <Card.Body>
        <Card.Title>Breed-specific Haircuts</Card.Title>
        <Card.Text>
        Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>

      <Card.Body>
        <Card.Title>Baths for Every Breed</Card.Title>
        <Card.Text>
        We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row>
      <Col>
      <Card>
      <Card.Body>
        <Card.Title>Dog Dental care</Card.Title>
        <Card.Text>
        Dental healthis vital to dog's overall health. A dog's teeth and gums should be checked 
        every 4-6 months by a veterinarian. You can dirctly walk in. No need to book an appoinment.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      <Card.Body>
        <Card.Title>Dog Ear Cleaning</Card.Title>
        <Card.Text>
        Clean the ears to prevent infection. Walk-ins welcomed or phone appointment only. 
        Nails trimmed and electronically filed and clean the ears to help prevent infections. 
        Walk-ins welcomed or phone appointment only.
         </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row>
      <Col>
      <Card>
      <Card.Body>
        <Card.Title>Cat Eye & Ear care</Card.Title>
        <Card.Text>
        Great for everyday cleaning, wiping dirty paws, and wiping 
        away the dander and excess hair that can cause human cat allergies. Also reduces shedding and cat related allergies.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      <Card.Body>
        <Card.Title>Fish Medication</Card.Title>
        <Card.Text>
        Cleaning water, giving proper heat and light help to maintain health of fish. For all kind of fish we will 
        supply the food. You can directly walk in. No need to book an appointment.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row>
      <Col>
      <Card>
      <Card.Body>
        <Card.Title>Hairball Remedy</Card.Title>
        <Card.Text>
         Help to prevent hairballs features and promote healthy digestion.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      <Card.Body>
        <Card.Title>First Aid Service</Card.Title>
        <Card.Text>
          Basic first aid service for cat and dog.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    <Row>
      <Col>
      <Card>
      <Card.Body>
        <Card.Title>Walk-In Services</Card.Title>
        <Card.Text>
        Help care for your pet with essential services such as nail trimming, 
        teeth-brushing and gland expressions. Walk-in service only.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      <Card.Body>
        <Card.Title>Customized Packages</Card.Title>
        <Card.Text>
        Upgrade their visit with packages designed to target specific needs such as de-shedding,
         dry and sensitive skin care and more.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    
    </Container>
    </div>

    <div>
      <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Company name</Card.Title>
          <Card.Text>
          <b>ANGEL PET CARE STORE</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            Name: Prachi Manwar<br></br>
            Contact No: 314-906-1900<br></br>
            Email: prachimanwar1@gmail.com
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Address</Card.Title>
          <Card.Text>
            4166, Lindell Boulevard Saint Louis, Missouri, United States 63108
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </div>
  );
}

export default BasicExample;