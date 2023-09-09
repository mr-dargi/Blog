import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Cart Component 
export default function Cart() {
  // Create card with react bootstrap 
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3">
      <Card
        style={{ 
          width: "auto",
          height: "550px",
          padding: "0",
          margin: "30px 0 0 10px"
        }}
      >
          {/*------------------------------------------
            Card image section:
          ------------------------------------------*/}
          <Card.Img 
            className="card-img-top" 
            src="/download.jpeg" 
            alt="Card image"
          />
          {/*------------------------------------------
            Card body section  
          ------------------------------------------*/}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
          {/*------------------------------------------
            Footer section of the card that's contains
            author name
          ------------------------------------------*/}
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}