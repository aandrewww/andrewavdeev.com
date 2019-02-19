import React, { Component } from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';

const Navbar = class extends Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {/*
          <Link className="navbar-item" to="/projects">
          Projects
          </Link>
        */}
              <Link className="navbar-item" to="/bookshelf">
                Bookshelf
              </Link>
              {/*
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        */}
              {/*
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
        */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
