/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import UserProfile from "./screens/profile/UserProfile";
import ViewChallenges from "./screens/viewchallenges/ViewChallenges";
import CreateChallenge from "./screens/challenge/create/CreateChallenge";
import HomePage from "./screens/homepage/homepage";
import Carousel from "./screens/carousel/Carousel"
import Bugs from "./screens/viewbugs/Bugs";
import ViewUnsubscribes from "./screens/viewunsubscribes/ViewUnsubscribes";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "pe-7s-graph",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "profile",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/"
  },
  {
    path: "/view",
    name: "Challenges",
    icon: "pe-7s-note2",
    component: ViewChallenges,
    layout: "/challenges"
  },
  {
    path: "/create",
    name: "Create Challenge",
    icon: "pe-7s-note2",
    component: CreateChallenge,
    layout: "/challenges"
  },
  {
    path: "homepage",
    name: "Home Page Order",
    icon: "pe-7s-graph",
    component: HomePage,
    layout: "/"
  },
  {
    path: "carousel",
    name: "Carousel",
    icon: "pe-7s-news-paper",
    component: Carousel,
    layout: "/"
  },
  {
    path: "bugs",
    name: "Bugs",
    icon: "pe-7s-science",
    component: Bugs,
    layout: "/"
  },
  {
    path: "metrics",
    name: "Metrics",
    icon: "pe-7s-graph",
    component: ViewChallenges,
    layout: "/"
  },
  {
    path: "unsubscribes",
    name: "Unsubscribes",
    icon: "pe-7s-science",
    component: ViewUnsubscribes,
    layout: "/"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
