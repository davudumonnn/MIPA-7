import { Card, Button, Col, Row } from "react-bootstrap";

import batik from "./../assets/batik.jpg";
import jawara from "./../assets/17.jpg";
import fisika from "./../assets/fisika.jpg";
import tw2 from "./../assets/tw2.jpg";
import bioskop from "./../assets/bioskop1.jpg";
import tw4 from "./../assets/tw4.jpg";
import flashmob from "./../assets/flashmob.JPG";

const Page = () => {
  return (
    <div>
      <h3 className="text-center mt-3">OUR ALBUM 📷</h3>
      <div className="container">
        <Row className="mt-5 d-flex align-items-stretch">
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={batik} />
              <Card.Body>
                <Card.Title>Batik Dayyy</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" href="https://drive.google.com/drive/folders/1vuRGPGaT3G0vrPLJEYOM4xwC6X-V9LpA">
                  Open Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={jawara} />
              <Card.Body>
                <Card.Title>Jawara 2022</Card.Title>
                <Card.Text></Card.Text>
                <Button href="https://drive.google.com/drive/folders/1IvMbdnsiH6WDiBroYPb7cptJPiCKI-lo" variant="primary">
                  Open Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={fisika} />
              <Card.Body>
                <Card.Title>Fisika</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" href="https://drive.google.com/drive/folders/1yUJiBGkobA-Mt_UUbpMKuecHxiQOm9WR">
                  Open Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row className="mt-5 d-flex align-items-stretch">
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={tw2} />
              <Card.Body>
                <Card.Title>Tawangmangu Part 1</Card.Title>
                <Card.Text></Card.Text>
                <Button href="https://drive.google.com/drive/folders/1-5vYclx80tBzMm-VnfVFJnIUS3cbUV7w" variant="primary">
                  Open Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={bioskop} />
              <Card.Body>
                <Card.Title>Nonton Bioskop</Card.Title>
                <Card.Text></Card.Text>
                <Button href="https://drive.google.com/drive/folders/1IvMbdnsiH6WDiBroYPb7cptJPiCKI-lo" variant="primary">
                  Open Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={tw4} />
              <Card.Body>
                <Card.Title>Tawangmangu Part 2</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" href="https://drive.google.com/drive/folders/1yUJiBGkobA-Mt_UUbpMKuecHxiQOm9WR">
                  Open Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row className="mt-5 d-flex align-items-stretch justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={flashmob} />
              <Card.Body>
                <Card.Title>Last Dance 😥</Card.Title>
                <Card.Text></Card.Text>
                <Button href="https://drive.google.com/drive/folders/1-bqBIDwQnRZ2fu2ediqIxSRVJrlKngcN" variant="primary">
                  Open Album
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Page;
