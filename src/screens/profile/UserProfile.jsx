/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

import {Card} from "../.././components/Card/Card.jsx";
import {FormInputs} from "../.././components/FormInputs/FormInputs.jsx";
// import { UserCard } from "/Users/psj03/IdeaProjects/ReactjsCognitoStarter/src/components/UserCard/UserCard.jsx";
// import avatar from "/Users/psj03/IdeaProjects/ReactjsCognitoStarter/src/assets/img/faces/face-3.jpg";
import {Hub} from "@aws-amplify/core";
import {AuthService} from "../../services/auth-service";
import {Auth} from "aws-amplify";
import {notification} from "antd";

class UserProfile extends Component {

  state = {
    loggedIn: false,
    userdata: {}
  };

  constructor(props) {
    super(props);
    Hub.listen(AuthService.CHANNEL, this.onHubCapsule, 'MyListener');
  }

  componentDidMount() {
    // Check if the user is already logged-in...if so, redirect
    Auth.currentAuthenticatedUser({
      bypassCache: true
    }).then(user => {
      this.setState({
        firstname: user.attributes.given_name,
        userdata: user.attributes,
        username: user.username
      })
      this.setState({loggedIn: true});
      this.setState()
      console.log(user)
    })
    .catch(err => {
      this.setState({loggedIn: false});
    });
  }

  onHubCapsule = (capsule) => {
    const {channel, payload} = capsule;
    if (channel === AuthService.CHANNEL &&
        payload.event === AuthService.AUTH_EVENTS.LOGIN) {
      if (payload.success) {
        this.setState({
          loggedIn: true,
          username: payload.username,
          firstname: payload.user.attributes.given_name,
          userdata: payload.user.attributes
        });
      }
    } else if (channel === AuthService.CHANNEL &&
        payload.event === AuthService.AUTH_EVENTS.SIGN_OUT) {
      if (payload.success) {
        this.setState({loggedIn: false, username: ""});
        notification.open({
          type: 'info',
          message: 'You have logged out',
          duration: 10
        });
      }
    }
  };

  render() {
    return (
        <div className="content">
          <Container fluid>
            <Row>
              <Col md={12}>
                <Card
                    title="Profile"
                    content={
                      <form>
                        <FormInputs
                            ncols={["col-md-6", "col-md-4"]}
                            properties={[
                              {
                                label: "Username",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Username",
                                defaultValue: this.state.username
                              },
                              {
                                label: "Email address",
                                type: "email",
                                bsClass: "form-control",
                                placeholder: "Email",
                                defaultValue: this.state.userdata.email
                              }
                            ]}
                        />
                        <FormInputs
                            ncols={["col-md-6", "col-md-6"]}
                            properties={[
                              {
                                label: "First name",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "First name",
                                defaultValue: this.state.firstname
                              },
                              {
                                label: "Last name",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Last name",
                                defaultValue: this.state.userdata.family_name
                              }
                            ]}
                        />
                        {/*<Button bsStyle="info" pullRight fill type="submit">*/}
                        {/*  Update Profile*/}
                        {/*</Button>*/}
                        <div className="clearfix"/>
                      </form>
                    }
                />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default UserProfile;
