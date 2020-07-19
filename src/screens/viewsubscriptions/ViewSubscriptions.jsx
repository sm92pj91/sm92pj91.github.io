import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./vcstyle.css"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import Card from "../../components/Card/Card.jsx"
import config from "../../configs/config"
import {Auth} from "aws-amplify";
import {notification} from "antd";

const challengeColumns = [
  {
    dataField: 'name',
    text: "Name",
    sort: true,
    headerStyle: (column, colIndex) => {
      return {width: '300px'};
    }
  },
  {dataField: 'count', text: "Count", sort: true}];
const {SearchBar} = Search;

class ViewSubscriptions extends Component {
  state = {
    tdChallenges: [],
    tdSubscriptions: [],
  }
  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.setState({...this.state, redirectChallenge: row.id});
      this.setRedirect();
      console.log(row.id)
    }
  };
  componentDidMount() {
    fetch(
        config.BASE_URL + '/challenge')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        tdChallenges: data.sort(function (a, b) {
          return Date.parse(b.UpdatedAt) - Date.parse(a.UpdatedAt)
        })
      })
    })
    .then(() => Auth.currentSession({
      bypassCache: true
    }))
    .then(user => {
      fetch(
          config.BASE_URL + '/subscription',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
            },
          })
      .then(res => res.json())
      .then((data) => {
        const counts = {};
        data.map(subscription => {
          let challenge = this.state.tdChallenges.find(x => x.ChallengeId === subscription.ChallengeId);
          if(challenge) {
            return challenge.Name;
          } else {
            return 'Create your own'
          }
        }).forEach((el) => {
          counts[el] = counts[el] ? (counts[el] += 1) : 1;
        });
        let pieData = [];
        Object.keys(counts).forEach(function(key) {
          pieData.push({name: key, count: counts[key]})
        })
        this.setState({
          tdSubscriptions: pieData.sort(function (a, b) {
            return Date.parse(b.count) - Date.parse(a.count)
          })
        })

      })
      .catch(console.log)
    })
    .catch(err => {
      notification.open({
        type: 'error',
        message: 'Not logged in',
        description: 'Redirecting to login page',
        duration: 10
      });
      console.log(err)
    });
  }

  createChallengeData(challenge) {
    return {
      id: challenge.ChallengeId,
      name: challenge.Name,
      description: challenge.Description,
      type: challenge.ChallengeType,
      categories: challenge.Categories.toString(),
      active: challenge.IsActive,
      liveAt: challenge.LiveAt,
      updatedAt: challenge.UpdatedAt,
      createdAt: challenge.CreatedAt
    }
  }

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
                          data={this.state.tdSubscriptions}
                          columns={challengeColumns}
                          wrapperClasses="table-responsive"
                          search
                      >
                        {
                          props => (
                              <div>
                                <h4 className="title">Subscriptions&nbsp;&nbsp;&nbsp;&nbsp;
                                  <SearchBar {...props.searchProps} /></h4>
                                <hr/>
                                <div className="tableStyle">
                                  <BootstrapTable
                                      {...props.baseProps}
                                      // selectRow={this.rowEvents}
                                      defaultSorted={[{
                                        dataField: 'count', // if dataField is not match to any column you defined, it will be ignored.
                                        order: 'desc' // desc or asc
                                      }]}
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

export default ViewSubscriptions;
