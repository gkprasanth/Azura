import styles from '../styles/Home.module.css'
import TeamData from './data/TeamData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'
import {FaPhoneAlt} from "react-icons/fa"

const Team = () => {
  const data = [
    {
      "id": 1,
      "name": "Sanhith",
      "role": "Developer",
      "number": "9133897791"
    },
    {
      "id": 2,
      "name": "Aakash",
      "role": "Designer",
      "number": "8978882003"
    }
  ]
  
    return(
      <div className={styles.container}>
        <Container>
          <Row className={styles.title}>
            <h1><span>Student Coordinators</span> for Azura 2k24</h1>
          </Row>
          <Row  xs={1} sm={1} md={2}>
          {
            data.map((item,index) => (
              <Col key={item._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Text>
                      <h4>{item.name}</h4>
                      <p>{item.department}</p>
                    </Card.Text>
                    <a className={styles.icon} href={`tel:${item.number}`}>
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
