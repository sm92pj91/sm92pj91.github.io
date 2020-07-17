import {Button, Form, Icon, Input, notification, Row} from 'antd';
import React from 'react';
import {Hub, Logger} from "@aws-amplify/core";
import {AuthService} from "../../services/auth-service";

class PasswordChallengeForm extends React.Component {
  logger = new Logger("Password Challenge Form");
  styles = {
    loginForm: {
      "maxWidth": "300px"
    },
    loginFormForgot: {
      "float": "right"
    },
    loginFormButton: {
      "width": "100%"
    }
  };

  constructor(props) {
    super(props);
    Hub.listen(AuthService.CHANNEL, this.onHubCapsule, 'MyListener');
  }

  // Default handler for listening events
  onHubCapsule = (capsule) => {
    const {channel, payload} = capsule;
    if (channel === AuthService.CHANNEL &&
        payload.event === AuthService.AUTH_EVENTS.PASSWORD_CHANGE) {
      this.logger.info('Hub: ' + payload.message);
      if (!payload.success) {
        this.setState({errorMessage: payload.message})
        notification.open({
          type: 'error',
          message: "Couldn't change your password",
          description: payload.message,
          duration: 15
        });

      } else {
        this.setState({errorMessage: null});
        notification.open({
          type: 'success',
          message:
              ' You have successfully logged in!',
          description: 'Welcome back!',
        });

        this.props.history.push("/")
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.logger.info('Received values of form: ', values);
        AuthService.passwordChallenge(values.username, values.oldPassword,
            values.newPassword)
      }
    });
  };

  componentWillUnmount() {
    this.logger.info("Removing HUB subscription to " + AuthService.CHANNEL);
    Hub.remove(AuthService.CHANNEL, this.onHubCapsule);
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
        <div>

          <Row style={{display: 'flex', justifyContent: 'center'}}>
            Enter A New Password
          </Row>

          <Row>
            <Form onSubmit={this.handleSubmit} style={this.styles.loginForm}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{
                    required: true,
                    message: 'Please input your email!'
                  }],
                })(
                    <Input
                        prefix={<Icon type="user"
                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Email"
                    />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('oldPassword', {
                  rules: [{
                    required: true,
                    message: 'Please input your old Password!'
                  }],
                })(
                    <Input
                        prefix={<Icon type="lock"
                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Old Password"
                    />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('newPassword', {
                  rules: [{
                    required: true,
                    message: 'Please input your new Password!'
                  }],
                })(
                    <Input
                        prefix={<Icon type="lock"
                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="New Password"
                    />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit"
                        style={this.styles.loginFormButton}>
                  Change password
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </div>
    );
  }

}

export const
    WrappedPasswordChallengeForm = Form.create({name: 'normal_login'})(
        PasswordChallengeForm);
