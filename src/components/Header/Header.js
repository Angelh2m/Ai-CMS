import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
// import classNames from 'classNames';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isActive: !this.state.isActive, })
    console.log('ok', this.state.isActive);
  }

  render() {


    const activeNavigation = (
      "c_header__side_navigation",
      {
        ["c_header__side_navigation__show"]: this.state.isActive,
        ["c_header__side_navigation__hidden"]: !this.state.isActive
      });

    return (
      <div className="c_header" >
        <nav >
          <div className='c_header__top'>
            <div>
              <Link to="#" > About </Link>
              <Link to="#" > FAQ </Link>
              <Link to="#" > Contact </Link>
            </div>
            <div>
              <i className="icon-instagram"> </i>
              <i className="icon-facebook"> </i>
              <i className="icon-twitter"> </i>
              <i className="icon-youtube"> </i>
              <i className="icon-pinterest2"> </i>
            </div>
          </div>
          <div className='c_header__bottom'>
            <h1 >
              <Link to="/" className='logo'>
                Living With Annah
              </Link>
            </h1>
            <div>
              <li>Style </li>
              <li>Beauty </li>
              <li>Travel </li>
              <li>Home </li>
              <li>Daily </li>
              <li>Looks </li>
            </div>
            <div className='c_header__burger' >
              {!this.state.isActive && (<i className="icon-burger--button" onClick={this.toggle}></i>)}
              {this.state.isActive && (<i className="icon-close--button" onClick={this.toggle}></i>)}
            </div>
          </div>

        </nav>
        {this.state.isActive && (<div onClick={this.toggle} className='c_header__background'>BACKGROUND</div>)}

        <div className={`c_header__side_navigation ${this.state.isActive ? 'c_header__side_navigation__show' : 'c_header__side_navigation__hidden'} `}>
          <i className="icon-search--button"></i>

          <input className='c_header__search' type="text" placeholder="Search..." />
          <hr />

          <h3>Shop</h3>
          <li>SHOP THE COLLECTION</li>
          <li>SHOP DAILY LOOKS</li>
          <li>SHOP JULIA’S PICKS</li>
          <h3>Style</h3>
          <li>JULIA’S STYLE</li>
          <h3>RESSES</h3>
          <li>ACCESSORIES</li>
          <li>CLASSIC</li>
          <li>SPRING</li>

        </div>
      </div>
    )
  }
}




export default Header
