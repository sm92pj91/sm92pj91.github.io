import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import Amplify from "@aws-amplify/core";
import awsConfig from "./configs/aws-configs";
Amplify.configure({
    ...awsConfig,
    Region: 'eu-west-1',
    Storage: {
        AWSS3: {
            bucket: 'challenge-accepted-mob', //REQUIRED -  Amazon S3 bucket
            region: 'eu-west-1', //OPTIONAL -  Amazon service region
        }
    },
    // Auth:
    //     {
    //         UserPoolId: 'eu-west-1_K1L1Dr9i3',
    //         aws_user_pools_mfa_type: 'OFF',
    //         userPoolWebClientId: '39upoqrgro0kenlh0mglilijcm',
    //         region: 'eu-west-1',
    //         mandatorySignIn: true,
    //         authenticationFlowType: 'USER_PASSWORD_AUTH',
    //     }
});

Amplify.Logger.LOG_LEVEL = 'INFO';
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
