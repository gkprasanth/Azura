import styles from "../styles/Home.module.css";
import TechnicalEventsCivilData from "./data/TechnicalEventsCivilData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalCivil = () => {
  
  const data =  [
    {
      "_id": 1,
      "title": "Poster Presentation",
      "Organizer": ["V.Srimuktha", "J.Ruchitha"]
    },
    {
      "_id": 2,
      "title": "Paper presentation",
      "Organizer": ["M.Sowmya", "G.Jahnavi"]
    },
    {
      "_id": 3,
      "title": "Survey hunt",
      "Organizer": ["M.Eshwar", "Rakesh"]
    },
    {
      "_id": 4,
      "title": "Tech quiz",
      "Organizer": ["T.Keerthana", "V.Varshitha"]
    }
  ];

  
  return (
    <div className={styles.container}>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1>
            Technical events by the<span> Department of Civil Engineering</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {data.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <p>Organized by:</p>
                  <Card.Text>
                  {Array.isArray(index.Organizer) ? (
                      index.Organizer.map((organizer, index) => (
                        <div key={index}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{organizer}</i>
                        </div>
                      ))
                    ) : (
                      <div>
                        <br />
                        <FaPhoneAlt />
                        <br />
                        <i>{index.Organizer}</i>
                      </div>
                    )}
                   
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
      </Container>
    </div>
  );
};
export default TechnicalCivil;
