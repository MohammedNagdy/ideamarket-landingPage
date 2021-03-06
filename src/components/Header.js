import React, { Component } from "react";
import "../style.css";
import Navbar from "./Navbar";
import ideamarketLogo from "../assets/IdeaMarkets_Gradient-removebg-preview 1.png"

class Header extends Component {
  state = {
    activeIndex: null
  };
  handleClick = index => this.setState({ activeIndex: index });
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".bar").className = "p-absolute bar scroll";
      document.querySelector(".ideamarket-name").className = "ideamarket-name scroll";
    } else {
      document.querySelector(".bar").className = "p-absolute bar";
      document.querySelector(".ideamarket-name").className = "ideamarket-name";

    }
  };

  render() {
    const clickables = [
      { name: "Account" },
      { name: "About" },
      { name: "Newsletter" },
      { name: "Community" }
    ];
    return (
      <div className="p-absolute bar ">
        <div className="navbar-brand idea-brand">
          <img className="brand" src={ideamarketLogo} alt="ideamarket-logo" />
          <span className="ideamarket-name">Ideamarket</span>
        </div>
        <ul className="d-flex justify-content-center">
          {clickables.map((clickable, i) => {
            return (
              <Navbar
                key={clickable.name}
                name={clickable.name}
                index={i}
                isActive={this.state.activeIndex === i}
                onClick={this.handleClick}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
