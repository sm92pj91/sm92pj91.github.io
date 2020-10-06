import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./vcstyle.css"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import Card from "../../components/Card/Card.jsx"
import config from "../../configs/config"
import {Auth} from "aws-amplify";
import {notification} from "antd";
import {Redirect} from "react-router-dom";

const bugColumns = [
  {dataField: 'createdAt', text: "Created At", sort: true},
  {dataField: 'company', text: "Company", sort: true},
  {dataField: 'number', text: "Number", sort: true},
  {dataField: 'message', text: "Message", sort: true},
  {dataField: 'email', text: "Email", sort: true},
  {dataField: 'name', text: "Name", sort: true},
  {dataField: 'type', text: "Type", sort: true},
  {dataField: 'id', text: "ID", sort: true}];
const {SearchBar} = Search;

class Interest extends Component {
  state = {
    tdBugs: [],
    redirect: false,
  };

  componentDidMount() {
    Auth.currentSession({
      bypassCache: true
    }).then(user => {
      fetch(config.BASE_URL + '/interest', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
        },
      }).then(res => {
            if (res.status !== 200) {
              alert("Error, Interests not found");
              return;
            }
            res.json()
            .then(response => {
              this.setState({tdBugs: response})
            })
            .catch(err => console.log(err))
          }
      )
      .catch(error => console.log(error));

    })
    .catch(err => {
      notification.open({
        type: 'error',
        message: 'Not logged in',
        description: 'Redirecting to login page',
        duration: 10
      });
      this.setRedirect(true)
    });
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/login'}/>
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  render() {
    return (

        <div className="content">
          {this.renderRedirect()}
          <Container fluid>
            <Row>
              <Col md={12}>
                <Card
                    title=""
                    category=""
                    ctTableFullWidth={false}
                    ctTableResponsive={true}
                    content={
                      <ToolkitProvider
                          striped
                          hover
                          keyField="id"
                          data={this.state.tdBugs}
                          columns={bugColumns}
                          // rowEvents={this.rowEvents}
                          wrapperClasses="table-responsive"
                          search
                      >
                        {
                          props => (
                              <div>
                                <h4 className="title">Interest&nbsp;&nbsp;&nbsp;&nbsp;
                                  <SearchBar {...props.searchProps} /></h4>
                                <hr/>
                                <div className="tableStyle">
                                  <BootstrapTable
                                      {...props.baseProps}
                                      // selectRow={this.rowEvents}
                                      // rowEvents={this.rowEvents}
                                  />
                                </div>
                              </div>
                          )
                        }
                      </ToolkitProvider>
                    }
                />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Interest;
