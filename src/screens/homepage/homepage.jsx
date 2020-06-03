import React, {useState} from "react";
import {DndProvider} from "react-dnd";
import HomePageData from './HomePageData'
import Backend from 'react-dnd-html5-backend'
import {Col, Container, Row,} from "react-bootstrap";
import {Card} from "../.././components/Card/Card.jsx";
import {Redirect} from "react-router-dom";
import {Auth} from "aws-amplify";
import {notification} from "antd";

const HomePage = (props) => {
  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={'/login'}/>
    }
  };

  Auth.currentSession({
    bypassCache: true
  }).then(() => {})
  .catch(err => {
    notification.open({
      type: 'error',
      message: 'Not logged in',
      description: 'Redirecting to login page',
      duration: 10
    });
    setRedirect(true)
  });
  return (
      <div className="content">
        {renderRedirect()}
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
