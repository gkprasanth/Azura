import styles from "../styles/Home.module.css";
import TechnicalEventsITData from "./data/TechnicalEventsITData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalIT = () => {
  const data = [
    {
      "_id": "1",
      "title": "Paper Presentation",
      "organizer1": "D.Neha",
      "mobile1": "tel:7981564984"
    }
  ]
  
  return (
    <div className={styles.container}>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1>
            Technical events by the<span> Department of IT</span>
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

                  <div>Organized by:</div>
                  <Card.Text>
                    {index.mobile1 && (
                      <Link href={"index.mobile1"}>
                        <a className={styles.icon}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      </Link>
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
export default TechnicalIT;
