import styles from '../styles/Home.module.css'
import TeamData from './TeamData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'
import {FaPhoneAlt} from "react-icons/fa"

const Team = () => {
    return(
      <div className={styles.container}>
        <Container>
          <Row className={styles.title}>
            <h1><span>Student Coordinators</span> for Azura 2k22</h1>
          </Row>
          <Row>
          {
            TeamData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4></h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.name}</p>
                    </Card.Text>
                    <a href="tel:{index.mobile}">
                        <FaPhoneAlt/>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
        </Container>
      </div>
    )
}
export default Team