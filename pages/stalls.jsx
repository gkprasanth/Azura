import styles from '../styles/Home.module.css'
import StallsData from './StallsData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'

const Stalls = () => {
    return(
      <div className={styles.container}>
        <Container>
          <Row className={styles.title}>
            <h1><span>Stalls</span> for Azura 2k22</h1>
          </Row>
          <Row>
          {
            StallsData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <h5>Organised by: {index.organizer}</h5>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer"  className={styles.cardAnchor}>Pay Now</a>
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
export default Stalls