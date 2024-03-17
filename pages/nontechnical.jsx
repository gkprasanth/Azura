import styles from "../styles/Home.module.css";
// import NonTechnicalEventsCSEData from "./NonTechnicalEventsCSEData.json";
// import NonTechnicalEventsCSCData from "./NonTechnicalEventsCSCData.json";
// import NonTechnicalEventsCSMData from "./NonTechnicalEventsCSMData.json";
// import NonTechnicalEventsECEData from "./NonTechnicalEventsECEData.json";
// import NonTechnicalEventsEEEData from "./NonTechnicalEventsEEEData.json";
// import NonTechnicalEventsMechData from "./NonTechnicalEventsMechData.json";
// import NonTechnicalEventsCivilData from "./NonTechnicalEventsCivilData.json";
// import NonTechnicalEventsMBAData from "./NonTechnicalEventsMBAData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
const Nontechnical = () => {

  const civil = [
    {
       "_id":"1",
       "title":"Poetry Competetion",
       "organizer1": "Raahil",
       "organizer2": " Naga Sai",
       "mobile1":"tel:9149410633",
       "mobile2":"tel:8639400929"
       
    }
 ]



 const csm = [
  {
     "_id":"1",
     "title":"Poetry Competetion",
     "organizer1": "Raahil",
     "organizer2": " Naga Sai",
     "mobile1":"tel:9149410633",
     "mobile2":"tel:8639400929"
     
  }
]

const cse = [
  {
     "_id":"1",
     "title":"Poetry Competetion",
     "organizer1": "Raahil",
     "organizer2": " Naga Sai",
     "mobile1":"tel:9149410633",
     "mobile2":"tel:8639400929"
     
  }
]


const mech = [
  {
     "_id":"1",
     "title":"Poetry Competetion",
     "organizer1": "Raahil",
     "organizer2": " Naga Sai",
     "mobile1":"tel:9149410633",
     "mobile2":"tel:8639400929"
     
  }
]


const csd = [
  {
     "_id":"1",
     "title":"Poetry Competetion",
     "organizer1": "Raahil",
     "organizer2": " Naga Sai",
     "mobile1":"tel:9149410633",
     "mobile2":"tel:8639400929"
     
  }
]



const It = [
{
   "_id":"1",
   "title":"Poetry Competetion",
   "organizer1": "Raahil",
   "organizer2": " Naga Sai",
   "mobile1":"tel:9149410633",
   "mobile2":"tel:8639400929"
   
}
]

const mba = [
{
   "_id":"1",
   "title":"Poetry Competetion",
   "organizer1": "Raahil",
   "organizer2": " Naga Sai",
   "mobile1":"tel:9149410633",
   "mobile2":"tel:8639400929"
   
}
]


const eee = [
{
   "_id":"1",
   "title":"Poetry Competetion",
   "organizer1": "Raahil",
   "organizer2": " Naga Sai",
   "mobile1":"tel:9149410633",
   "mobile2":"tel:8639400929"
   
}
]

const ece = [
  {
     "_id":"1",
     "title":"Poetry Competetion",
     "organizer1": "Raahil",
     "organizer2": " Naga Sai",
     "mobile1":"tel:9149410633",
     "mobile2":"tel:8639400929"
     
  }
  ]

const csc = [
  {
     "_id":"1",
     "title":"Poetry Competetion",
     "organizer1": "Raahil",
     "organizer2": " Naga Sai",
     "mobile1":"www.google.com",
     "mobile2":"tel:8639400929"
     
  }
  ]











  return (
    <div className={styles.container}>
      <h1 style={{
        color:'#ffff',
        fontSize:'2.2rem',
        textAlign:'center',
        padding:'20px',
        textDecoration:'underline'
      }}  >Non-Technical Events</h1>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of CSE</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {cse.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <Link href={"index.mobile1"}>
                          <a className={styles.icon}>
                            <FaPhoneAlt />
                            <br />
                            <i>{index.organizer1}</i>
                          </a>
                        </Link>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile2"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer2}</i>
                        </a>
                      )}
                      {index.mobile3 && (
                        <a className={styles.icon} href={"index.mobile3"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer3}</i>
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <Link href={"index.razorpayLink"}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of CSC (Cyber Security)</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {csc.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <a className={styles.icon} href={"index.mobile1"}>
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile2"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer2}</i>
                        </a>
                      )}
                      {index.mobile3 && (
                        <a className={styles.icon} href={"index.mobile3"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer3}</i>
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                    Register
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of CSM (AI ML)</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {csm.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <a className={styles.icon} href={"index.mobile1"}>
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile2"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer2}</i>
                        </a>
                      )}
                      {index.mobile3 && (
                        <a className={styles.icon} href={"index.mobile3"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer3}</i>
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <Link href={"index.razorpayLink"}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of ECE</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {ece.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <a className={styles.icon} href={"index.mobile1"}>
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile2"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer2}</i>
                        </a>
                      )}
                      {index.mobile3 && (
                        <a className={styles.icon} href={"index.mobile3"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer3}</i>
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <Link href={"index.razorpayLink"}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of EEE</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {eee.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <a className={styles.icon} href={"index.mobile1"}>
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile2"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer2}</i>
                        </a>
                      )}
                      {index.mobile3 && (
                        <a className={styles.icon} href={"index.mobile3"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer3}</i>
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <Link href={"index.razorpayLink"}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of Mechanical</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {mech.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <a className={styles.icon} href={"index.mobile1"}>
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile2"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer2}</i>
                        </a>
                      )}
                      {index.mobile3 && (
                        <a className={styles.icon} href={"index.mobile3"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          {/* <i>{index.organizer3}</i> */}
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <Link href={"index.razorpayLink"}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of Civil</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {civil.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <a className={styles.icon} href={"index.mobile1"}>
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile2"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer2}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={"index.mobile3"}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <Link href={"index.razorpayLink"}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className={styles.title}>
          <h1>
            Non Technical events by the<span> Department of MBA</span>
          </h1>
        </Row>
        {/* <Row xs={1} sm={1} md={2}>
          {mba.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                    <>
                      {index.mobile1 && (
                        <a className={styles.icon} href={index.mobile1}>
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      )}
                      {index.mobile2 && (
                        <a className={styles.icon} href={index.mobile2}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <p>{index.organizer2}</p>
                        </a>
                      )}
                      {index.mobile3 && (
                        <a className={styles.icon} href={index.mobile3}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer3}</i>
                        </a>
                      )}
                    </>
                  </Card.Text>
                  <Link href={index.razorpayLink}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    </div>
  );
};
export default Nontechnical;
