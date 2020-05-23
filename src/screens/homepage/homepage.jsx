import React from "react";
import {DndProvider} from "react-dnd";
import HomePageData from './HomePageData'
import Backend from 'react-dnd-html5-backend'
import {Col, Container, Row,} from "react-bootstrap";
import {Card} from "../.././components/Card/Card.jsx";

const HomePage = (props) => {

  return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                  title="Home Page Layout"
                  content={
                    <div>
                      <DndProvider backend={Backend}>
                        <HomePageData/>
                      </DndProvider>

                    </div>
                  }
              />
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default HomePage
