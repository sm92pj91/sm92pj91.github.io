import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./vcstyle.css"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {Redirect} from 'react-router-dom'
import Card from "../../components/Card/Card.jsx"
import config from "../../configs/config"

const challengeColumns = [
  {
    dataField: 'name',
    text: "Name",
    sort: true,
    headerStyle: (column, colIndex) => {
      return {width: '300px'};
    }
  },
  {dataField: 'description', text: "Description", sort: true},
  {dataField: 'type', text: "Type", sort: true},
  {dataField: 'categories', text: "Categories", sort: true},
  {dataField: 'active', text: "Active", sort: true},
  {dataField: 'liveAt', text: "Live At", sort: true},
  {dataField: 'updatedAt', text: "Updated At", sort: true},
  {dataField: 'createdAt', text: "Created At", sort: true},
  {dataField: 'id', text: "ID", sort: true}];
const {SearchBar} = Search;

class ViewChallenges extends Component {
  state = {
    tdChallenges: [],
    redirect: false,
    redirectChallenge: ""
  }
  rowEvents = {
    onClick: (e, row, rowIndex) => {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.redirectChallenge = row.id;
      this.setRedirect()
      console.log(row.id)
    }
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect
          to={'/challenges/create/' + this.state.redirectChallenge}/>
    }
  }
  componentDidMount() {
    fetch(
        config.BASE_URL + '/challenge')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        tdChallenges: data.sort(function (a, b) {
          return Date.parse(b.UpdatedAt) - Date.parse(a.UpdatedAt)
        }).map(c => this.createChallengeData(c))
      })
    })
    .catch(console.log)
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
          <div>
            {this.renderRedirect()}
          </div>
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
                          data={this.state.tdChallenges}
                          columns={challengeColumns}
                          rowEvents={this.rowEvents}
                          wrapperClasses="table-responsive"
                          search
                      >
                        {
                          props => (
                              <div>
                                <h4 className="title">Challenges&nbsp;&nbsp;&nbsp;&nbsp;
                                  <SearchBar {...props.searchProps} /></h4>
                                <hr/>
                                <div className="tableStyle">
                                  <BootstrapTable
                                      {...props.baseProps}
                                      // selectRow={this.rowEvents}
                                      rowEvents={this.rowEvents}
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

export default ViewChallenges;
