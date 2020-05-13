import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import icon from "../../assets/img/icon.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
        <div
            id="sidebar"
            className="sidebar"
            data-color={this.props.color}
            data-image={this.props.image}
        >
          <div className="logo">
            <a
                className="simple-text logo-mini"
                href="/challenges/view"
            >
              <div className="logo-img">
                <img src={icon} alt="logo_image" />
              </div>
            </a>
            <a
                className="simple-text logo-normal"
                href="/challenges/view"

            >
              Challenge CMS
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
              {this.props.routes.map((prop, key) => {
                if (!prop.redirect)
                  return (
                      <li
                          style={{width:"100%"}}
                          className={
                            prop.upgrade
                                ? "active active-pro"
                                : this.activeRoute(prop.layout + prop.path)
                          }
                          key={key}
                      >
                        <NavLink
                            to={prop.layout + prop.path}
                            className="nav-link"
                            activeClassName="active"
                        >
                          <i className={prop.icon} />
                          <p>{prop.name}</p>
                        </NavLink>
                      </li>
                  );
                return null;
              })}
            </ul>
          </div>
        </div>
    );
  }
}

export default Sidebar;
