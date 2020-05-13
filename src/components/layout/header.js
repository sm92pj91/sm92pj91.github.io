import React from 'react';
import {Col, Layout, Row} from 'antd';
import {SearchInputField} from "../search/search-input-field";
import {MyMenuTopMain} from "./menu-top-main";
import {Hub} from "@aws-amplify/core";

const {Header} = Layout;

export class MyHeader extends React.Component {

    state = {
        loggedIn: false
    };

    constructor(props) {
        super(props);

        Hub.listen('auth', (data) => {
            const {payload} = data;
            this.onAuthEvent(payload);
            // console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
        })
    }

    onAuthEvent(payload) {
        // ... your implementation
    }


    render() {
        return (<Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff'}}>
            <Row gutter={12}>
                <Col span={6}>
                    Challenge Accepted CMS
                </Col>
                <Col span={10}>
                    {/*<SearchInputField/>*/}
                </Col>
                <Col span={4}>
                    <MyMenuTopMain/>
                </Col>
            </Row>
        </Header>)
    }
}
