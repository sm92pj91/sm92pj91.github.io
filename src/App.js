import React from 'react';
import './App.css';
import {Layout} from 'antd';
import {MyHeader} from "./components/layout/header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {SearchScreenDefault} from "./screens/search/search-screen-default";
import {AddRssFeedScreen} from "./screens/add-rss-feed";
import {AuthScreen} from "./screens/auth/auth-screen";
import Amplify from '@aws-amplify/core'
import Sidebar from "./components/Sidebar/Sidebar";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// AWS Config Files
import awsConfig from './configs/aws-configs'
import UserProfile from "./screens/profile/UserProfile";
import routes from "./routes.js";
import ViewChallenges from "./screens/viewchallenges/ViewChallenges";
import CreateChallenge from "./screens/challenge/create/CreateChallenge";
import HomePage from "./screens/homepage/homepage";
import Carousel from "./screens/carousel/Carousel";
import Bugs from "./screens/viewbugs/Bugs";

const {Content, Footer} = Layout;

Amplify.configure(awsConfig);

Amplify.Logger.LOG_LEVEL = 'INFO';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      color: "challenge",
      fixedClasses: "dropdown show-dropdown open",
      location: null
    };
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      return (
          <Route
              path={prop.layout + prop.path}
              render={props => (
                  <prop.component
                      {...props}
                  />
              )}
              key={key}
          />
      );
    });
  };


  componentDidUpdate(e) {
    if (
        window.innerWidth < 993 &&
        e.history.location.pathname !== e.location.pathname &&
        document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }



  render() {
    return (
        <div className="wrapper">

          <div id="main-panel" className="main-panel" ref="mainPanel">
            <Router>
              <Route path={"/"} render={props => <Sidebar {...props} routes={routes}
                                                          color={this.state.color}/>} />

              <Layout>

                <Layout>
                  <MyHeader/>

                  <Content
                      style={{padding: '0 50px', marginTop: 64, width: "100%"}}>

                    <div style={{
                      background: '#fff',
                      padding: 24,
                      width: "100%",
                      marginTop: "20px"
                    }}>
                      <Route exact path='/' component={AuthScreen}/>
                      <Route path={"/search"} component={SearchScreenDefault}/>
                      {/*<Route path={"/browse"} component={BrowseScreen}/>*/}
                      <Route path={"/addrss"} component={AddRssFeedScreen}/>
                      <Route path={"/login"} component={AuthScreen}/>
                      <Route path={"/register"} component={AuthScreen}/>
                      <Route path={"/registerconfirm"} component={AuthScreen}/>
                      <Route path={"/forgotpassword1"} component={AuthScreen}/>
                      <Route path={"/forgotpassword2"} component={AuthScreen}/>
                      <Route path={"/profile"} component={UserProfile}/>
                      <Route path={"/challenges/view"} component={ViewChallenges}/>
                      {/*<Route path={"/challenges/create"} component={CreateChallenge}/>*/}
                      <Route path={"/challenges/create/:id?"} component={CreateChallenge}/>
                      <Route path={"/homepage"} component={HomePage}/>
                      <Route path={"/carousel"} component={Carousel}/>
                      <Route path={"/bugs"} component={Bugs}/>

                    </div>
                  </Content>
                  <Footer style={{textAlign: 'center'}}>Challenge Accepted ©
                    2020 </Footer>
                </Layout>
              </Layout>
            </Router>
          </div>
        </div>
    );
  }
}

export default App;
