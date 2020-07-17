import React from 'react';
import {Col, Row} from "antd";
import {WrappedLoginForm} from "./login-form";
import {Route} from 'react-router-dom';
import {WrappedRegisterForm} from "./register-form";
import {WrappedForgotPasswordEmailForm} from "./forgot-password-email-form";
import {WrappedForgotPasswordEmailCodeForm} from "./forgot-password-email-code-form";
import {WrappedRegisterConfirmForm} from "./register-confirm-form";
import {
  WrappedPasswordChallengeForm
} from "./password-challenge-form";

export class AuthScreen extends React.Component {

  render() {
    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: "500px"
        }}>
          <Col>

            <Row>
              <Route path={"/login"} component={WrappedLoginForm}/>
              <Route path={"/register"} component={WrappedRegisterForm}/>
              <Route path={"/passwordChallenge"} component={WrappedPasswordChallengeForm}/>
              <Route path={"/registerconfirm"}
                     component={WrappedRegisterConfirmForm}/>
              <Route path={"/forgotpassword1"}
                     component={WrappedForgotPasswordEmailForm}/>
              <Route path={"/forgotpassword2"}
                     component={WrappedForgotPasswordEmailCodeForm}/>
              <Route path={"/forgotpassword2/:email"}
                     component={WrappedForgotPasswordEmailCodeForm}/>
            </Row>
          </Col>
        </div>
    );
  }

}
