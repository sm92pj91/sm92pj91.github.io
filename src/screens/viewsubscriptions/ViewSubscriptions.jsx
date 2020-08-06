import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./vcstyle.css"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import Card from "../../components/Card/Card.jsx"
import config from "../../configs/config"
import {Auth} from "aws-amplify";
import {notification} from "antd";
import moment from "moment";

const challengeColumns = [
  {
    dataField: 'name',
    text: "Name",
    sort: true,
    headerStyle: (column, colIndex) => {
      return {width: '300px'};
    }
  },
  {dataField: 'count', text: "Count", sort: true},
  {dataField: 'active', text: "Active", sort: true},
  {dataField: 'complete', text: "Ever Completed", sort: true},
  {dataField: 'updated', text: "Updated this week", sort: true}];
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
        counts['TOTAL'] = {count: 0, active: 0, complete: 0, updated: 0}
        data.map(subscription => {
          let challenge = this.state.tdChallenges.find(
              x => x.ChallengeId === subscription.ChallengeId);
          if (challenge) {
            subscription.Name = challenge.Name;
          } else {
            subscription.Name = 'Create your own'
          }
          return subscription;
        }).forEach((el) => {
          counts[el.Name] = counts[el.Name] ?
              {
                count: counts[el.Name].count + 1,
                active: counts[el.Name].active + (el.IsActive ? 1 : 0),
                complete: counts[el.Name].complete + (el.TimesCompleted > 0 ? 1
                    : 0),
                updated: counts[el.Name].updated + ((moment().diff(
                    moment(el.UpdatedAt), 'hours')) < 168 ? 1 : 0)
              } :
              {
                count: 1,
                active: el.IsActive ? 1 : 0,
                complete: el.TimesCompleted > 0 ? 1 : 0,
                updated: (moment().diff(moment(el.UpdatedAt), 'hours')) < 24 ? 1
                    : 0
              };
          counts['TOTAL'] = {
            count: counts['TOTAL'].count + 1,
            active: counts['TOTAL'].active + (el.IsActive ? 1 : 0),
            complete: counts['TOTAL'].complete + (el.TimesCompleted > 0 ? 1
                : 0),
            updated: counts['TOTAL'].updated + ((moment().diff(
                moment(el.UpdatedAt), 'hours')) < 168 ? 1 : 0)
          }
        });
        this.state.tdChallenges.forEach(challenge => {
          if (!counts[challenge.Name]) {
            counts[challenge.Name] = {
              count: 0,
              active: 0,
              complete: 0,
              updated: 0
            };
          }
        })
        let pieData = [];
        Object.keys(counts).forEach(function (key) {
          pieData.push({name: key, ...counts[key]})
        })
        this.setState({
          tdSubscriptions: pieData.sort(function (a, b) {
            return b.count - a.count
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
