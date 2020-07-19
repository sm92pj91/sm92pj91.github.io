import React, {Component} from "react";
import {Container} from "react-bootstrap";
import "./vcstyle.css"
import config from "../../configs/config"
import {Auth} from "aws-amplify";
import {notification} from "antd";
import {Legend, Pie, PieChart, ResponsiveContainer} from "recharts";

class ViewSubscriptions extends Component {
  state = {
    tdChallenges: [],
    tdSubscriptions: [],
  }
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
          pieData.push({name: key, value: counts[key]})
        })
        this.setState({
          tdSubscriptions: pieData
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

  reducer(array){ // array to set > set.forEach > map.set
    const count = new Map();
    const values = new Set(array);
    values.forEach((element)=> {
      count.set(element, array.filter((arrayElement) => arrayElement === element).length);
    });
    return count;
  }

  render() {
    return (
        <div className="content">
          <Container fluid>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart height={250}>
                <Pie
                    data={this.state.tdSubscriptions}
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                    // label={({
                    //   cx,
                    //   cy,
                    //   midAngle,
                    //   innerRadius,
                    //   outerRadius,
                    //   value,
                    //   index
                    // }) => {
                    //   console.log("handling label?");
                    //   const RADIAN = Math.PI / 180;
                    //   // eslint-disable-next-line
                    //   const radius = 25 + innerRadius + (outerRadius - innerRadius);
                    //   // eslint-disable-next-line
                    //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    //   // eslint-disable-next-line
                    //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    //
                    //   return (
                    //       <text
                    //           x={x}
                    //           y={y}
                    //           fill="#8884d8"
                    //           textAnchor={x > cx ? "start" : "end"}
                    //           dominantBaseline="central"
                    //       >
                    //         {this.state.tdSubscriptions[index].name} ({value})
                    //       </text>
                    //   );
                    // }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>;
          </Container>
        </div>
    );
  }
}

export default ViewSubscriptions;
