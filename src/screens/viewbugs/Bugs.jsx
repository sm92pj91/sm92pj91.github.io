import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./vcstyle.css"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import Card from "../../components/Card/Card.jsx"
import config from "../../configs/config"
import {Auth} from "aws-amplify";
import {notification} from "antd";

const bugColumns = [
  {dataField: 'bug', text: "Bug", sort: true},
  {dataField: 'id', text: "Id", sort: true},
  {dataField: 'createdAt', text: "Created At", sort: true},
  {dataField: 'reporter', text: "Reporter", sort: true}];
const {SearchBar} = Search;

class Bugs extends Component {
  state = {
    tdBugs: [],
  };

  componentDidMount() {
    Auth.currentSession({
      bypassCache: true
    }).then(user => {
      fetch(config.BASE_URL + '/bugs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
        },
      }).then(res => {
            if (res.status !== 200) {
              alert("Error, Bugs not found");
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
      // setRedirect(true)
    });
  }

  // createBugData(bug){
  //   return {
  //     bug: bug.bug,
  //     created: bug.createdAt,
  //     reporter: bug.reporter,
  //     id: bug.id,
  //   {dataField: 'bug', text: "Bug", sort: true},
  //   {dataField: 'id', text: "Id", sort: true},
  //   {dataField: 'created', text: "Created At", sort: true},
  //   {dataField: 'reporter', text: "Reporter", sort: true}];
  //
  //     id: challenge.ChallengeId,
  //     name: challenge.Name,
  //     description: challenge.Description,
  //     type: challenge.ChallengeType,
  //     categories: challenge.Categories.toString(),
  //     active: challenge.IsActive,
  //     liveAt: challenge.LiveAt,
  //     updatedAt: challenge.UpdatedAt,
  //     createdAt: challenge.CreatedAt
  //   }
  // }

  render() {
    return (

        <div className="content">
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
                                <h4 className="title">Bugs&nbsp;&nbsp;&nbsp;&nbsp;
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

export default Bugs;
