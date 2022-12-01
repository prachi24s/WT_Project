import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function About() {
  return (
          <div>
          <div>

          <Card.Img variant="top" src="/Pretty.jpg" />
          
          <Card body>

            Name : Prachi Manwar<br></br>
            Contact No : 314-906-1900<br></br>
            Email : prachimanwar1@gmail.com    
          
          </Card>
          </div>
           
           <div>
           Address : 4166, Lindell Boulevard Saint Louis, Missouri, United States 63108
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
  )
}

export default About;